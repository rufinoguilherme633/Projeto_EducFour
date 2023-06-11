"use strict";
//LOGIN FUNCIONANDO
var button = document.getElementById("botao_login");
button.addEventListener("click", handleLogin);

function handleLogin() {
  var username = document.getElementById("username_input").value;
  var password = document.getElementById("password_input").value;

  // Verificar se os campos de usuário e senha estão preenchidos
  if (username === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Fazer a requisição GET para a API
  fetch("http://localhost:5050/v1/educ_four/adm/get")
    .then(function(response) {
      // Verificar se a resposta foi bem-sucedida
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro ao obter os dados da API.");
      }
    })
    .then(function(data) {
      var adms = data.adms;
      var match = false;

      // Verificar se algum dos usuários retornados possui os valores de login correspondentes
      for (var i = 0; i < adms.length; i++) {
        var adm = adms[i];

        // Verificar se os valores digitados pelo usuário correspondem aos valores do usuário retornado pela API
        if (username === adm.email && password === adm.senha) {
          match = true;
          break;
        }
      }

      // Verificar se os dados correspondem
      if (match) {
        console.log("Dados encontrados. Acesso permitido.");

        // Redirecionar para a próxima página
        window.location.href = "./login/publish_new.html";
      } else {
        console.log("Dados não encontrados. Confira o email e/ou a senha.");

        // Exibir alerta com a mensagem de erro
        alert("Dados não encontrados, confira o email e/ou a senha.");
      }
    })
    .catch(function(error) {
      console.log("Ocorreu um erro durante a solicitação:", error);
    });
}

// Chamar a função handleLogin assim que a página for carregada para obter os dados da API
window.addEventListener("DOMContentLoaded", handleLogin);

