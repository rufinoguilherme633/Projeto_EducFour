//NAO TA FUNCIONANDO

document.addEventListener("DOMContentLoaded", function() {
    function getUsers() {
        const url = 'http://localhost:5050/v1/educ_four/users/get';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Exibe os dados no console
                const subsContainer = document.getElementById("subs_container");

                // Verificar se a resposta é um array de objetos
                if (Array.isArray(data)) {
                    data.forEach(user => {
                        const container = document.createElement("div");
                        container.classList.add("subs_container");

                        for (const [key, value] of Object.entries(user)) {
                            const info = document.createElement("p");
                            info.textContent = `${key}: ${value}`;
                            container.appendChild(info);
                        }

                        subsContainer.appendChild(container);
                    });
                } else {
                    console.error('A resposta da API não é um array de objetos.');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    getUsers();
});
