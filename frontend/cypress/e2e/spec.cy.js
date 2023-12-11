describe("login / logout flow specification", () => {
  it("cannot navigate to /profile-sg without being logged in", () => {
    cy.visit("/cart").url().should("include", "/login");
  });
});
