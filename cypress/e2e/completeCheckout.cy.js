import { faker } from "@faker-js/faker";
import LoginSite from "../support/page-objects/login.page";
import AddProducts from "../support/page-objects/addProducts.page";
import completeCheckoutPage from "../support/page-objects/completeCheckout.page";
const perfil = require("../fixtures/perfil.json");

describe("Funcionalidade fluxo completo de checkout", () => {
  beforeEach(() => {
    cy.visit("");
    LoginSite.login(perfil.login, perfil.password);
    AddProducts.products("Sauce Labs Backpack");
  });
  it("Deve finalizar a compra", () => {
    completeCheckoutPage.checkout(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    );
  });
});
