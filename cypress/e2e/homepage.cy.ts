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
    const contents = [
      {
        title: "10K FUN RUN",
        description:
          "Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!",
      },
      {
        title: "GRATIS DAN BERHADIAH",
        description:
          "Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!",
      },
      {
        title: "50+ TENANT BAZZAR",
        description:
          "Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion",
      },
      {
        title: "SPECIAL PERFORMANCE",
        description:
          "Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!",
      },
    ];
    it("Content", () => {
      contents.map((content, index: number) => {
        cy.getByData("card-title").eq(index).contains(content.title);
        cy.getByData("card-description")
          .eq(index)
          .contains(content.description);
      });

      cy.getByData("btn-about").contains("Daftar Sekarang");
      cy.getByData("btn-about").should(
        "have.attr",
        "href",
        "https://event.detik.com",
      );
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

  it("CTA", () => {
    cy.getByData("btn-cta").contains("Lihat Lebih Banyak");
    cy.getByData("btn-cta").should(
      "have.attr",
      "href",
      "https://www.detik.com/search/searchall?query=fun+run&siteid=2",
    );
  });

  it("Footer", () => {});
});
