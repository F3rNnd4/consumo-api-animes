# Consumo de API de Animes

### Objetivo

Criar uma aplicação React/Next.js que realize o consumo organizado de uma API pública, aplicando os conceitos de React Hooks (useState e useEffect), gerenciamento de estados, requisições HTTP com Axios e renderização condicional.

## Funcionalidades Implementadas

- Consumo da API Jikan para obter dados de animes.
- Exibição de uma lista de animes em um layout responsivo.
- Cada anime é exibido em um card com as seguintes informações:
  - Imagem do anime.
  - Título do anime.
  - Título em japonês.
  - Tipo (ex.: TV, Filme).
  - Fonte (ex.: Mangá, Light Novel).
  - Número de episódios.
  - Rank do anime.
- Mensagens de carregamento e erro:
  - Exibe "Carregando filmes..." enquanto os dados estão sendo buscados.
  - Exibe uma mensagem de erro caso a API não responda.

## Instruções de instalação e execução - Criação do zero

1. No terminal, realizar o comando npx create-next-app@latest nome-do-projeto;
2. Responder à perguntas da criação do projeto como:
Ok to proceed? y
TypeScript - No
ESLint - Yes
Tailwind CSS - No
src/ directory - Yes
App Router - Yes
Turbopack for next dev - Yes
import alias - No
3. Acessar o diretório do projeto com cd nome-do-projeto;
4. Mudar o nome dos arquivos layout.js e page.js para layout.jsx e page.jsx;
5. Executar o comando npm run dev para iniciar o servidor de desenvolvimento;
6. Acessar o projeto no navegador em http://localhost:3000.
Instruções de instalação e execução - Git Clone
Clone o repositório e entre na pasta do projeto;
Instale as dependências com npm install;
Execute o comando npm run dev para iniciar o servidor de desenvolvimento;
Acesse o projeto no navegador em http://localhost:3000.
