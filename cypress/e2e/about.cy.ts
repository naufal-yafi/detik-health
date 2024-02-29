describe("About", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Checking Content", () => {
    cy.getByData("card-title").eq(0).contains("10K FUN RUN");
    cy.getByData("card-description")
      .eq(0)
      .contains(
        "Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!",
      );

    cy.getByData("card-title").eq(1).contains("GRATIS DAN BERHADIAH");
    cy.getByData("card-description")
      .eq(1)
      .contains(
        "Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!",
      );

    cy.getByData("card-title").eq(2).contains("50+ TENANT BAZZAR");
    cy.getByData("card-description")
      .eq(2)
      .contains(
        "Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion",
      );

    cy.getByData("card-title").eq(3).contains("SPECIAL PERFORMANCE");
    cy.getByData("card-description")
      .eq(3)
      .contains(
        "Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!",
      );
  });
});
