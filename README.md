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

Iniciar projeto com json-server instalado de forma global:

    npm run dev
    json-server --watch src/services/db.json --port 3030

Iniciar projeto com json-server instalado de forma local:

    npm run dev
    npm run json-server

OBS.: O cada linha deve ser execultada em terminais diferentes, ou os comandos devem ser modificados para execultar em um unico terminal.