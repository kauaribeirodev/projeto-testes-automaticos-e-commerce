# Projeto de Automação de Testes QA com Cypress

Este projeto foi criado como parte de um estudo prático de automação de testes "do zero", focado em um fluxo de e-commerce.

## 🎯 Objetivo

O objetivo principal é demonstrar a criação de um projeto de automação de ponta a ponta (end-to-end), cobrindo os fluxos mais críticos de uma aplicação de e-commerce. O projeto testa funcionalidades de login, gerenciamento de carrinho, ordenação de produtos e o processo completo de checkout.

## 🌐 Aplicação Alvo

Os testes foram executados no seguinte site de demonstração:

- **URL:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

## 🚀 Tecnologias e Ferramentas

- **[Cypress](https://www.cypress.io/):** Framework principal de automação de testes end-to-end.
- **[Faker.js](https://github.com/faker-js/faker):** Biblioteca para geração de dados de teste dinâmicos e fictícios (ex: nomes, endereços, etc.).

## 🛠️ Padrões e Técnicas Aplicadas

- **Page Objects Model (POM):** Abstração das páginas da aplicação em classes, centralizando os seletores e ações para facilitar a manutenção e legibilidade dos testes.
- **Fixtures:** Utilização de arquivos (JSON) para carregar dados de teste estáticos, como massas de dados de usuários (incluindo usuários válidos e bloqueados).

## ⚙️ Funcionalidades Automatizadas

O projeto cobre os seguintes cenários de teste:

1.  **Fluxo de Login:**

    - Login com usuário válido.
    - Tentativa de login com usuário bloqueado (verificação de mensagem de erro).
    - Tentativa de login com senha incorreta.

2.  **Jornada de Compra:**

    - Adição de um ou mais produtos ao carrinho.

3.  **Ordenação de Produtos:**

    - Verificação da ordenação de produtos por Nome (A-Z).
    - Verificação da ordenação de produtos por Preço (Menor para Maior / Maior para Menor).

4.  **Fluxo de Checkout:**
    - Preenchimento dos dados do comprador (utilizando Faker.js para dados dinâmicos).
    - Finalização da compra.
    - Verificação da mensagem de sucesso pós-compra.

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/))

## 🏁 Como Executar o Projeto

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/kauaribeirodev/projeto-testes-automaticos-e-commerce.git](https://github.com/kauaribeirodev/projeto-testes-automaticos-e-commerce.git)
    ```

2.  Acesse a pasta do projeto:

    ```bash
    cd projeto-testes-automaticos-e-commerce
    ```

3.  Instale as dependências (Cypress e Faker):

    ```bash
    npm install
    npm install @faker-js/faker
    ```

    _(Nota: Se o Faker já estiver no seu `package.json`, apenas `npm install` é suficiente.)_

4.  Execute os testes (Modo Interativo - Headed):

    ```bash
    npx cypress open
    ```

5.  Execute os testes (Modo Terminal - Headless):
    ```bash
    npx cypress run
    ```

## 👨‍💻 Autor

- **Kauã Ribeiro** - [LinkedIn](https://www.linkedin.com/in/kauaribeirodev/)
