document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("saveButtonnews");

  saveButton.addEventListener("click", function() {
      var titulo = document.getElementById("titulo").value;
      var descricao = document.getElementById("descricao").value;
      var autor = document.getElementById("autor").value;
      var data = document.getElementById("data").value;
      var tema = document.getElementById("tema").value;
      var nomeArquivo = document.getElementById("imagem").value;
      var corpo_noticia = document.getElementById("corpo_noticia").value;

      // Verifica se algum campo está vazio
      if (!titulo || !descricao || !autor || !data || !tema || !nomeArquivo || !corpo_noticia) {
          alert("Por favor, preencha todos os campos");
          return;
      }

      function createNews(news) {
          const url = 'http://localhost:5050/v1/educ_four/news/post';
          const options = {
              method: 'POST',
              body: JSON.stringify(news),
              headers: {
                  "Content-Type": "application/json"
              }
          };

          fetch(url, options)
              .then(response => response.json())
              .then(data => {
                  // Lógica a ser executada após o sucesso da requisição
                  console.log(data);
                  alert("Notícia cadastrada");
              })
              .catch(error => {
                  // Lógica a ser executada em caso de erro na requisição
                  console.error(error);
                  alert('Erro, preencha todos os campos')
              });
      }

      const news = {
          "titulo": titulo,
          "nome_autor": autor,
          "descricao": descricao,
          "capa_noticia": nomeArquivo,
          "tema": tema,
          "data_noticia": data,
          "corpo_noticia": corpo_noticia
      };

      createNews(news);
  });
});
