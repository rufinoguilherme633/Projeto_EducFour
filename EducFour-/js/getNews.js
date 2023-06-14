"use strict";

async function getNewspaper() {
  const urlnewspaper = "http://localhost:5050/v1/educ_four/news/get";
  const response = await fetch(urlnewspaper);
  const data = await response.json();
  console.log(data);
  return data;
}

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
  const body_news = document.createElement("span");
  body_news.classList.add("body_news");
  body_news.textContent = newspaper.corpo_noticia;
  containernewspaper.appendChild(title);
  containernewspaper.appendChild(description);
  containernewspaper.appendChild(date);
  containernewspaper.appendChild(body_news);
  card.appendChild(img);
  card.appendChild(containernewspaper);
  return card;
};

const loadAllNewspapers = async () => {
  const container = document.getElementById("news_container");
  const cards = await getNewspaper();
  const news = cards.news.map(criarCards);
  container.append(...news);
};

const orderNews = (news, order) => {
  if (order === "desc") {
    news.sort((a, b) => {
      const dateA = new Date(a.data_noticia.split("/").reverse().join("-"));
      const dateB = new Date(b.data_noticia.split("/").reverse().join("-"));
      return dateB - dateA;
    });
  }
  return news;
};

const handleOrderChange = async () => {
  const select = document.getElementById("order-select");
  const order = select.value;
  const container = document.getElementById("news_container");
  container.innerHTML = "";

  const cards = await getNewspaper();
  const orderedNews = orderNews(cards.news, order);
  const news = orderedNews.map(criarCards);
  container.append(...news);
};

// Event listener para a mudança de seleção no <select>
const orderSelect = document.getElementById("order-select");
orderSelect.addEventListener("change", handleOrderChange);

loadAllNewspapers();