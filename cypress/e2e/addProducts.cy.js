import LoginSite from "../support/page-objects/login.page";
import AddProducts from "../support/page-objects/addProducts.page";
const perfil = require("../fixtures/perfil.json");

describe("Funcionalidade de Adicionar produto no carrinho", () => {
  beforeEach(() => {
    cy.visit("");
    LoginSite.login(perfil.login, perfil.password);
  });
  it("Deve adicionar produtos no Carrinho", () => {
    AddProducts.products("Sauce Labs Backpack");
  });
});
