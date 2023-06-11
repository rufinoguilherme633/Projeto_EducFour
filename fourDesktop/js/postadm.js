"use strict";
//ESTA FUNCIONANDO O CADASTRO DOS ADMS
document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("saveButton");

  saveButton.addEventListener("click", function() {
    var username = document.querySelector('.user input').value;
    var email = document.querySelector('.email input').value;
    var password = document.querySelector('.password input').value;

    console.log("Usuário:", username);
    console.log("E-mail:", email);
    console.log("Senha:", password);

    console.log("O botão 'Salvar' foi clicado!");

    const adm = {
      "nome": username,
      "email": email,
      "senha": password
    };

    createCadastroAdm(adm);
  });

  function createCadastroAdm(adm) {
    const url = 'http://localhost:5050/v1/educ_four/adm/post';
    const options = {
      method: 'POST',
      body: JSON.stringify(adm),
      headers:{
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });

      alert('Registro criado com sucesso')
  }
});
