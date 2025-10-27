import LoginSite from "../support/page-objects/login.page";
const perfil = require("../fixtures/perfil.json");

describe("Teste de login com diferentes usuários", () => {
  beforeEach(() => {
    cy.visit("");
  });
  // Teste 1
  it("Deve logar com sucesso", () => {
    LoginSite.login(perfil.login, perfil.password);
    cy.get(".title").should("contain", "Products");
  });
  // Teste 2
  it("Deve ocorrer um erro - Usuário Bloquado", () => {
    LoginSite.login(perfil.login1, "perfil.password");
    cy.get('[data-test="error"]').should("contain", "Epic sadface");
  });
  // Teste 3
  it("Deve logar com sucesso", () => {
    LoginSite.login(perfil.login2, perfil.password);
    cy.get(".title").should("contain", "Products");
  });
  // Teste 4
  it("Deve logar com sucesso", () => {
    LoginSite.login(perfil.login3, perfil.password);
    cy.get(".title").should("contain", "Products");
  });
  // Teste 5
  it("Deve logar com sucesso", () => {
    LoginSite.login(perfil.login4, perfil.password);
    cy.get(".title").should("contain", "Products");
  });
  // Teste 6
  it("Deve logar com sucesso", () => {
    LoginSite.login(perfil.login5, perfil.password);
    cy.get(".title").should("contain", "Products");
  });
});
