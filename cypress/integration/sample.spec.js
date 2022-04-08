// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Addition", () => {
    it("Test addition", () => {
      cy.visit("http://localhost:3000");
      cy.contains("1").click();
      cy.contains("+").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
});

describe("Soustraction", () => {
    it("Test soustraction", () => {
      cy.visit("http://localhost:3000");
      cy.contains("4").click();
      cy.contains("-").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("2");
    });
});

describe("Division", () => {
    it("Test division", () => {
      cy.visit("http://localhost:3000");
      cy.contains("6").click();
      cy.contains("/").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
});

describe("Division par 0", () => {
    it("Test division par 0", () => {
      cy.visit("http://localhost:3000");
      cy.contains("6").click();
      cy.contains("/").click();
      cy.contains("0").click();
      cy.contains("=").click();
      cy.get(".result").contains("Infinity");
    });
});

describe("Modulo", () => {
    it("Test modulo", () => {
      cy.visit("http://localhost:3000");
      cy.contains("6").click();
      cy.contains("%").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("0");
    });
});

describe("Racine carré", () => {
    it("Test racine carré", () => {
      cy.visit("http://localhost:3000");
      cy.contains("4").click();
      cy.contains("√x").click();
      cy.contains("=").click();
      cy.get(".result").contains("2");
    });
});

describe('My Failed Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    });
});

describe('My True Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    });
});