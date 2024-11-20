describe("First Test", () => {
  it("should find components .", () => {
    cy.visit("http://localhost:3000/todo");
    // by Tag name
    cy.get("input");

    // Write on the input field.
    cy.get("input").type("Hello World");

    // Assert
    cy.get("input").first().should("have.value", "Hello World");
  });
});
