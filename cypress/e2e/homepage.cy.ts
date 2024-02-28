describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("Hero", () => {
    it("Content", () => {
      cy.getByData("goto-about").contains("Tentang Acara");
    });
  });

  context("About", () => {
    it("Content", () => {});
  });

  context("Sponsor", () => {
    it("Content", () => {});
  });

  context("Gallery", () => {
    it("Content", () => {});
  });

  context("Berita", () => {
    it("Content", () => {});
  });
});
