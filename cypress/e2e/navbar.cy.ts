describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Cheking Content", () => {
    cy.getByData("menu-1").contains("Home");
    cy.getByData("menu-2").contains("Tentang");
    cy.getByData("menu-3").contains("Galeri");
    cy.getByData("menu-4").contains("Berita");
    cy.getByData("menu-5").contains("Registrasi");
  });

  context("Navigation", () => {
    it("Home", () => {
      cy.getByData("menu-1").should("have.attr", "href", "/");
    });

    it("About", () => {
      cy.getByData("menu-2").should("have.attr", "href", "/#about");
    });

    it("Gallery", () => {
      cy.getByData("menu-3").should("have.attr", "href", "/#gallery");
    });

    it("News", () => {
      cy.getByData("menu-4").should("have.attr", "href", "/#news");
    });

    it("News", () => {
      cy.getByData("menu-5").should(
        "have.attr",
        "href",
        "https://event.detik.com",
      );
    });
  });

  context("Navigate Link", () => {
    it("Goto Home", () => {
      cy.getByData("menu-1").contains("Home").click();
      cy.location("pathname").should("equal", "/");
    });

    it("Goto About", () => {
      cy.getByData("menu-2").contains("Tentang").click();
      cy.location("pathname").should("equal", "/");
      cy.location("hash").should("equal", "#about");
    });

    it("Goto Gallery", () => {
      cy.getByData("menu-3").contains("Galeri").click();
      cy.location("pathname").should("equal", "/");
      cy.location("hash").should("equal", "#gallery");
    });

    it("Goto News", () => {
      cy.getByData("menu-4").contains("Berita").click({ force: true });
      cy.location("pathname").should("equal", "/");
      cy.location("hash").should("equal", "#news");
    });
  });
});
