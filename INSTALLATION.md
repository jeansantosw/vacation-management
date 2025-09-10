


# 🏖️ Sistema de Gestão de Colaboradores e Férias

Este projeto é construído com [Tecnologias principais, ex: Node, Fastify, Drizzle, PostgreSQL, React, Typescript, React Query, Axios] 
e utiliza Docker para um setup de ambiente de desenvolvimento.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o **Docker** e o **Docker Compose** instalados em sua máquina.

  * [Instalar Docker](https://docs.docker.com/get-docker/)

## Configuração e Instalação

Siga os passos abaixo para ter o projeto rodando em sua máquina local.

#### 1\. Clonar o Repositório

Abra o terminal e clone o projeto usando `git`:

```bash
git clone [https://github.com/jeansantosw/vacation-management.git]
cd vacation-management
```

#### 2\. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo para suas variáveis de ambiente e preencha-o com suas próprias credenciais, chaves, etc.

```bash
cp .env.example .env
```

#### 3\. Iniciar os Contêineres

Este comando irá construir as imagens Docker e iniciar todos os serviços definidos no arquivo `docker-compose.yml`.

```bash
cd api

docker-compose up -d
```

O flag `-d` executa os contêineres em segundo plano. Se você quiser ver os logs em tempo real, remova o `-d`.

#### 4\. Executar Migrações do Banco de Dados

Uma vez que os contêineres estiverem rodando, você precisa executar as migrações para configurar o banco de dados.

```bash
cd api
npm run db:generate
npm run db:migrate
npm run db:seed
npm run start:api:dev

cd web
npm run start:web:dev
```

## Uso

  - **Frontend:** `http://localhost:5173/sign-in` Para entrar na aplicação
  - **Frontend:** `http://localhost:5173/` Página inicial com a lista de usuário
  - **Backend (API):** `http://localhost:3333`
  - **Backend (API):** `http://localhost:3333/docs` - Para consultar a documentação 

## Comandos Úteis do Docker

Aqui estão alguns comandos `docker-compose` que podem ajudar no seu dia a dia:

  - **Parar todos os contêineres:**
    ```bash
    docker-compose down
    ```
  - **Visualizar o status dos serviços:**
    ```bash
    docker-compose ps
    ```
