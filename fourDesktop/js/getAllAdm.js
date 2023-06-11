"use strict";

async function getadm() {
  const urlnewspaper = "http://localhost:8080/v1/educ_four/adm/get";
  const response = await fetch(urlnewspaper);
  const data = await response.json();
  console.log(data);
  return data;
}

getadm();

const criarCards = (adm) => {
    const card = document.createElement("div");
    card.classList.add("container_Adm");
  
    const containerNome = document.createElement("div");
    containerNome.classList.add("container_info_adm");
  
    const nomeAdm = document.createElement("span");
    nomeAdm.classList.add("nome_ad");
    nomeAdm.textContent = adm.nome;
  
    containerNome.appendChild(nomeAdm);
    card.appendChild(containerNome);
  
    const containerEmail = document.createElement("div");
    containerEmail.classList.add("container_info_adm");
  
    const emailAdm = document.createElement("span");
    emailAdm.classList.add("email_adm");
    emailAdm.textContent = adm.email;
  
    containerEmail.appendChild(emailAdm);
    card.appendChild(containerEmail);
  
  
    return card;
  };
  


const load_all_adm = async () => {
  const container = document.getElementById("container_adms");
  const cards = await getadm();
  
  const adm = cards.adms.map(criarCards);



  
  container.append(...adm);
};



load_all_adm()


  
