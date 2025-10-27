class CompleteCheckout {
  checkout(firstName, lastName, Zip) {
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#postal-code").type(Zip);
    cy.get("#continue").click();
    cy.get("#finish").click();
  }
}

export default new CompleteCheckout();
