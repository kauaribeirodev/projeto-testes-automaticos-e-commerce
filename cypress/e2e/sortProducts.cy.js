import LoginSite from "../support/page-objects/login.page";
import SortProducts from "../support/page-objects/sortProducts.page";
const perfil = require("../fixtures/perfil.json");

describe("Funcionalidade ordenar página de produtos", () => {
  beforeEach(() => {
    cy.visit("/");
    LoginSite.login(perfil.login, perfil.password);
  });
  it("Deve ordernar de Z a A", () => {
    SortProducts.produto("za");
    cy.get(".inventory_item_name ").should("contain", "Test.allTheThings()");
  });

  it("Deve ordenar de A a Z", () => {
    SortProducts.produto("az");
    cy.get(".inventory_item_name ").should("contain", "Sauce Labs Backpack");
  });

  it("Deve ordenar do Menor para o maior valor", () => {
    SortProducts.produto("lohi");
    cy.get(".inventory_item_name ").should("contain", "Sauce Labs Onesie");
  });

  it("Deve ordenar do Maior para o maior valor", () => {
    SortProducts.produto("hilo");
    cy.get(".inventory_item_name ").should(
      "contain",
      "Sauce Labs Fleece Jacket"
    );
  });
});
