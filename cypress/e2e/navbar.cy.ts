describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Cheking Content", () => {
    cy.getByData("menu").eq(0).contains("Home");
    cy.getByData("menu").eq(1).contains("Tentang");
    cy.getByData("menu").eq(2).contains("Galeri");
    cy.getByData("menu").eq(3).contains("Berita");
    cy.getByData("menu").eq(4).contains("Registrasi");
  });

  context("Navigation Link Menu", () => {
    it("Goto Home", () => {
      cy.getByData("menu").eq(0).contains("Home").click();
      cy.location("pathname").should("equal", "/");
    });

    it("Goto About", () => {
      cy.getByData("menu").eq(1).contains("Tentang").click();
      cy.location("pathname").should("equal", "/");
      cy.location("hash").should("equal", "#about");
    });

    it("Goto Gallery", () => {
      cy.getByData("menu").eq(2).contains("Galeri").click();
      cy.location("pathname").should("equal", "/");
      cy.location("hash").should("equal", "#gallery");
    });

    it("Goto News", () => {
      cy.getByData("menu").eq(3).contains("Berita").click({ force: true });
      cy.location("pathname").should("equal", "/");
      cy.location("hash").should("equal", "#news");
    });

    it("Goto Registration", () => {
      cy.getByData("menu").eq(4).contains("Registrasi").click();
      cy.wait(1000);
      cy.location("href").should("equal", "https://event.detik.com/");
    });
  });
});
