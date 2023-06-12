"use strict";

const select = document.getElementById("cbArea");
const div = document.getElementById("documents");
const donations = document.getElementById("donate");

const dataInput = document.getElementById("Data_de_Nascimento");

dataInput.addEventListener("input", function() {
  const inputValue = this.value;
  const formattedValue = formatarData(inputValue);
  this.value = formattedValue;
});

function formatarData(data) {
  // Remove caracteres não numéricos da data
  const numericData = data.replace(/\D/g, "");

  // Formata a data para o padrão "ano/mês/dia"
  const formattedData = numericData.replace(
    /^(\d{4})(\d{2})(\d{2})$/,
    "$1/$2/$3"
  );

  return formattedData;
}

select.addEventListener("change", function() {
  let value = select.value;

  if (value == "status") {
    div.style.display = "flex";
    donations.style.display = "none";
  } else if (value == "doador") {
    div.style.display = "none";
    donations.style.display = "flex";
  } else {
    div.style.display = "flex";
    div.style.flexDirection = "column";
  }
});

export const pesquisarCep = async cep => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    municipio: data.localidade,
    logradouro: data.logradouro,
    bairro: data.bairro
  };
};

const preencherFormulario = async () => {
  const cepDigitado = document.getElementById("cep").value;
  const cep = await pesquisarCep(cepDigitado);

  document.getElementById("logradouro").value = cep.logradouro;
  document.getElementById("bairro").value = cep.bairro;
  document.getElementById("cidade").value = cep.municipio;

  if (cep == undefined || cep == "") {
    alert("Por favor, informe um CEP válido.");
    return false;
  }

  return true;
};

document.getElementById("cep").addEventListener("blur", preencherFormulario);

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Captura dos valores dos campos do formulário
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;
  const rg = document.getElementById("rg").value;
  const telefone = document.getElementById("telefone").value;
  const data_nascimento = document.getElementById("Data_de_Nascimento").value;
  const area_de_atuacao = document.getElementById("cbArea").value;
  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const numero = document.getElementById("numero").value;
  const motivo_inscricao = document.getElementById("motivo_inscricao").value;
  const horarios_disponiveis = document.getElementById("horarios_disponiveis").value;

  const url = "http://localhost:5050/v1/educ_four/post/user";
  const data = {
    nome: nome,
    cnpj: "", // Campo não presente no formulário
    cpf: cpf,
    rg: rg,
    data_nascimento: data_nascimento,
    declaracao_escolaridade: "", // Campo não presente no formulário
    email: email,
    area_de_atuacao: area_de_atuacao,
    horarios_disponiveis: horarios_disponiveis,
    motivo_inscricao: motivo_inscricao,
    cep: cep,
    logradouro: logradouro,
    bairro: bairro,
    cidade: cidade,
    telefone: telefone
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log("Resposta da API:", result);
      // Faça algo com a resposta da API, se necessário

      // Exibir o alerta após o envio do formulário
      alert("Inscrição feita, aguarde o contato da nossa equipe");
    })
    .catch(error => {
      console.error("Ocorreu um erro:", error);
    });

});
