# aula-promise-nyt-api
Promises e consumo de api

## Pré-requisitos

Para este projeto, você deverá utilizar:

- Node.js
- Módulo [node-fetch](https://www.npmjs.com/package/node-fetch), para buscar dados da api;
- [handlebars](https://handlebarsjs.com/), para as views
- Api de notícias do New York Times

## Instruções para credenciamento de desenvolvedor no New York Times

Usaremos a API do New York Times. Siga o passo a passo disponível no site:
https://developer.nytimes.com/get-started

Depois, leia a documentação disponível em:
https://developer.nytimes.com/docs/articlesearch-product/1/overview


## Instruções de navegação:

O projeto deve ter:

1 - Uma página inicial com um formulário de busca com apenas um campo e um botão de "buscar".

- O formulário deve usar o método `GET`;
- O nome do campo de busca deve ser `q`, de "query".

2 - Ao clicar no botão `buscar`, o usuário deve ser redirecionado para uma nova página `/search-results`

- A página deve conter o resultado da busca pela palavra chave digitada pelo usuário;
- Cada notícia encontrada deve conter:
  * imagem;
  * titulo;
  * descrição;
  * Link para a notícia no site do NYT.
