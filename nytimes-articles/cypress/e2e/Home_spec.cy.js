describe("Homepage_spec.cy.js", () => {
  const url = "http://localhost:3000";

  beforeEach(() => {
    cy.visit(url);
    cy.intercept(
      "GET",
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=Cypress.env('api_key')`,
      { TextData: "allArticles.json" }
    ).as("getArticles");
    cy.intercept(
      "GET",
      `https://api.nytimes.com/svc/mostpopular/v2/home.json?api-key=Cypress.env('api_key')`,
      { TextData: "noResults.json" }
    ).as("getNoResults");
  });

  it("should visit the homepage", () => {
    cy.url("http://localhost:3000");
  });

  it("should display a header, form, list of articles, and footer", () => {
    cy.get("header > h1")
      .should("be.visible")
      .and("contain", "The Most popular Times Article");

    cy.get("footer > h3")
      .should("be.visible")
      .and("contain", "2024 The New York Times Company");
  });

  it("should display a list of articles on page load that each have a title and abstract", () => {
    cy.get(".article-list").should("not.be.empty");

    cy.get(".article-list a")
      .should("have.length", 15)
      .children()
      .should("have.class", "article-card")
      .within((card) => {
        cy.get("h2").should("be.visible").should("not.be.empty");
        cy.get("p").should("be.visible");
      });
  });

  it("should be able to click on an article card to view more details on a details viewpage and return to homepage", () => {
    cy.get(".article-list a").first().click();

    cy.get("button").contains("Go Back").click();

    cy.url(url);
  });
});
