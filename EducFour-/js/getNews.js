"use strict";

async function getnewspaper() {
  const urlnewspaper = "http://localhost:5050/v1/educ_four/news/get";
  const response = await fetch(urlnewspaper);
  const data = await response.json();
  console.log(data);
  return data;
}

getnewspaper();

const criarCards = (newspaper) => {
  const card = document.createElement("div");
  card.classList.add("new");

  const img = document.createElement("img");
  img.classList.add("news_img");
  img.src = newspaper.capa_noticia; // Defina a URL da imagem

  const containernewspaper = document.createElement("div");
  containernewspaper.classList.add("news_content");

  const title = document.createElement("p");
  title.classList.add("title_news");
  title.textContent = newspaper.titulo; // Defina o título da notícia

  const description = document.createElement("p");
  description.classList.add("news_description");
  description.textContent = newspaper.descricao; // Defina a descrição da notícia

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = newspaper.data_noticia; // Defina a data da notícia

  containernewspaper.appendChild(title);
  containernewspaper.appendChild(description);
  containernewspaper.appendChild(date);

  card.appendChild(img);
  card.appendChild(containernewspaper);

  const newsContainer = document.querySelector(".news_container");
  newsContainer.appendChild(card);

  return card;
};


const load_all_newspapers = async () => {
  const container = document.getElementById("news");
  const cards = await getnewspaper();
  
  const news = cards.news.map(criarCards);
  
  container.append(...news);
};



load_all_newspapers()


  
//   const criarCards = (newspaper) => {
//     const card = document.createElement("div"); 
//     card.classList.add("new");

//     const img = document.createElement("img");
//     img.classList.add("news_img");


//     const containernewspaper = document.createElement("div"); 
//     containernewspaper.classList.add("news_content");

//     const title = document.createElement("p");
//     title.classList.add("title_news");

//     const description = document.createElement("p");
//     description.classList.add("news_description");


//     const date = document.createElement("span");
//     date .classList.add("date");
// }