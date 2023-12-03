Para iníciar o projeto:

---    

Instalando modulos:
Para instalar os modulos necessários execute o comando,
    
    npm i

---    

Configuração inicial:Este projeto utiliza json-server caso ultilize uma porta ou url diferente da padrão, será necessário altera o arquivo src/services/jsonServerManager.jsx para a url do seu projeto:

    export const URL_DB = "http://localhost:3030/tarefas"

e cirar um array chamado "tarefas" na sua base de dados:
    
    "tarefas": []

---

Iniciar projeto:

    npm run dev
    json-server --watch src/services/db.json --port 3030