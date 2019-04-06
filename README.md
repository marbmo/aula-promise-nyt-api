# aula-promise-nyt-api
Promises e consumo de api

Neste projeto, você deverá entregar um site de busca de notícias. A fonte de dados será o site do jornal `New York Times`.

Nesta primeira etapa, o site deverá ter 2 páginas, uma com o formulário de busca de notícias e outra com o resultado da busca.

## Pré-requisitos

Para este projeto, você deverá utilizar:

- Node.js
- Módulo [node-fetch](https://www.npmjs.com/package/node-fetch), para buscar dados da api;
- Módulo [dotenv](https://www.npmjs.com/package/dotenv), para ler suar variáveis de ambiente;
- `.gitignore` para evitar que alguns arquivos ou pastas sejam versionados; 
- [handlebars](https://handlebarsjs.com/), para as views;
- Api de notícias do New York Times

Importante: Você deverá proteger suas credenciais. Elas não podem aparecer em seu código no github, para isso, utilize os arquivos:

- `.env` para guardar suar variáveis de ambiente e chaves.
- `.gitignore` para ignorar os arquivos `.env` e `node_modules`

É extremamente importante que você leia a documentação dos módulos  [node-fetch](https://www.npmjs.com/package/node-fetch) e [dotenv](https://www.npmjs.com/package/dotenv) antes de começar a colocar a mão na massa.


## Instruções para credenciamento de desenvolvedor no New York Times

### Credenciamento na api do NYT:

Usaremos a API do New York Times. Siga o passo a passo disponível no site para conseguir sua chave de desenvolvedor:

https://developer.nytimes.com/get-started

### Documentação:
A documentação da API do NYT está disponível em:
https://developer.nytimes.com/docs/articlesearch-product/1/overview


## Instruções de navegação:

O projeto deve ter:

1 - Uma página inicial com um formulário de busca com apenas um campo e um botão de "buscar".

- O formulário deve usar o método `GET`;
- O nome do campo de busca deve ser `q`, de "query".

2 - Ao clicar no botão `buscar`, o usuário deve ser redirecionado para uma nova página `/search-results`

- A página `/search-results` deve conter o resultado da busca pela palavra chave digitada pelo usuário;
- Cada notícia encontrada deve conter:
  * imagem;
  * titulo;
  * descrição;
  * Link para a notícia no site do NYT.
