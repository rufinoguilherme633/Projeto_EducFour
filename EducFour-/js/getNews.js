"use strict";

async function getNewspaper() {
  const urlNewspaper = "http://localhost:5050/v1/educ_four/news/get";
  const response = await fetch(urlNewspaper);
  const data = await response.json();
  console.log(data);
  return data;
}

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

  const body_news = document.createElement("span")
  body_news.classList.add("body_news")
  body_news.textContent = newspaper.corpo_noticia

  containernewspaper.appendChild(title);
  containernewspaper.appendChild(description);
  containernewspaper.appendChild(date);
  containernewspaper.appendChild(body_news)
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


const loadAllNewspapers = async () => {
  const container = document.getElementById("news_container");
  const select = document.getElementById("order-select");
  const newspapers = await getNewspaper();

  const ordenarNoticias = () => {
    const opcaoSelecionada = select.value;
    if (opcaoSelecionada === "asc") {
      newspapers.news.sort((a, b) => a.data_noticia.localeCompare(b.data_noticia));
    } else if (opcaoSelecionada === "desc") {
      newspapers.news.sort((a, b) => b.data_noticia.localeCompare(a.data_noticia));
    }
  };

  select.addEventListener("change", () => {
    ordenarNoticias();
    renderNoticias();
  });

  const renderNoticias = () => {
    container.innerHTML = "";
    newspapers.news.forEach((newspaper) => {
      const card = criarCards(newspaper);
      container.appendChild(card);
    });
  };

  ordenarNoticias();
  renderNoticias();
};

loadAllNewspapers();
