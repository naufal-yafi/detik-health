describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Cheking Content", () => {
    const menus = ["Home", "Tentang", "Galeri", "Berita", "Registrasi"];
    menus.forEach((menu, index) => {
      cy.getByData(`menu-${index + 1}`).contains(menu);
    });
  });

  it("Navigation Link", () => {
    const navigations = [
      "/",
      "/#about",
      "/#gallery",
      "/#news",
      "https://event.detik.com",
    ];

    navigations.map((navigation, index) => {
      cy.getByData(`menu-${index + 1}`).should("have.attr", "href", navigation);
    });
  });
});
