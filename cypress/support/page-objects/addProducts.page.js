class AddProducts {
  products(produto) {
    cy.get("#inventory_container").contains(produto).click();
    cy.get("#add-to-cart").click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  }
}

export default new AddProducts();
