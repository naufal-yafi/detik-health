import contents from "@/app/(homepage)/_partials/about/_data/about.data";
import ContentType from "@/app/(homepage)/_partials/about/_type/about.type";

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
    it("Content", () => {
      contents.map((content: ContentType, index: number) => {
        cy.getByData("card-title").eq(index).contains(content.title);
        cy.getByData("card-description")
          .eq(index)
          .contains(content.description);
      });
    });
  });

  context("Sponsor", () => {
    it("Content", () => {
      cy.getByData("title-sponsor").contains("DIDUKUNG OLEH");
    });
  });

  context("Gallery", () => {
    it("Content", () => {
      cy.getByData("title-gallery").contains("GALERI SUDIRMAN RUN 2022");
    });
  });

  context("Berita", () => {
    it("Content", () => {});
  });
});
