class SortProducts {
  produto(sort) {
    cy.get('[data-test="product-sort-container"]').select(sort);
  }
}

export default new SortProducts();
