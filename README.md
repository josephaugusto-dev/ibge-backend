<div align="center">

# 🗺️ IBGE Dashboard — Backend

> API RESTful que consome e serve dados oficiais do IBGE para o dashboard front-end.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://ibge-frontend-zuee.vercel.app)

**[🔗 Ver Front-end](https://github.com/josephaugusto-dev/ibge-frontend)**

</div>

---

## 📋 Sobre o Projeto

O **IBGE Backend** é a API que alimenta o dashboard de dados do IBGE. Responsável por consultar a API pública do IBGE, tratar e servir os dados de forma estruturada para o front-end, garantindo performance e organização nas respostas.

> 💡 Este projeto faz parte de uma aplicação Full Stack. Veja também o [repositório do front-end](https://github.com/josephaugusto-dev/ibge-frontend).

---

## ✨ Funcionalidades

- 🔗 Integração com a API pública do IBGE
- 📊 Tratamento e formatação dos dados para consumo no front-end
- 🌐 CORS configurado para comunicação com o front-end
- 🔒 Variáveis de ambiente com `.env`
- 🚀 Deploy serverless no Vercel

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **Node.js** | Runtime do servidor |
| **Express** | Framework para criação das rotas |
| **PostgreSQL** | Banco de dados |
| **Axios / node-fetch** | Consumo da API pública do IBGE |
| **CORS** | Liberação de acesso ao front-end |
| **dotenv** | Gerenciamento de variáveis de ambiente |

---

## 🖥️ Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/josephaugusto-dev/ibge-backend.git

# Entre na pasta do projeto
cd ibge-backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Renomeie o .env existente ou crie um novo
```

Exemplo de `.env`:
```env
PORT=3001
DATABASE_URL=sua_connection_string
```

```bash
# Inicie o servidor
npm run dev
# ou
node src/index.js
```

A API estará disponível em `http://localhost:3001`

---

## 📄 Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/` | Health check da API |
| `GET` | `/estados` | Lista todos os estados do Brasil |
| `GET` | `/estados/:uf` | Dados de um estado específico |
| `GET` | `/populacao` | Dados populacionais gerais |
| `GET` | `/municipios/:uf` | Municípios de um estado |

> ⚠️ As rotas acima podem variar. Consulte o código em `src/` para a lista atualizada.

---

## 📁 Estrutura de Pastas

```
ibge-backend/
├── src/
│   ├── routes/           # Definição das rotas
│   ├── controllers/      # Lógica de cada endpoint
│   └── index.js          # Ponto de entrada da aplicação
├── .env
└── package.json
```

---

## ⚠️ Atenção

O arquivo `.env` está presente no repositório com fins educacionais. Em projetos de produção, **nunca versione arquivos `.env`** — adicione-os ao `.gitignore`.

---

## 👨‍💻 Autor

Desenvolvido por **Joseph Augusto**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joseph-august27/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/josephaugusto-dev)

---

<div align="center">

Projeto Full Stack com dados reais do IBGE 🇧🇷

</div>
