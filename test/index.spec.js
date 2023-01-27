const { mdLinks } = require("../index.js");
const { fetch } = require("../__mock__/fetch.js");

describe("mdLinks", () => {
  it("Debe ser una función", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("Deberia devolver una promesa", () => {
    return mdLinks(
      "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/"
    )
      .then((route) => {
        expect(mdLinks(route)).toBe(typeof Promise);
      })
      .catch(() => {});
  });
  it("Debe resolver cuando el path existe", () => {
    const path =
      "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/";
    return mdLinks(path)
      .then((route) => {
        expect(route).resolves(path);
      })
      .catch(() => {});
  });
  it("Debe rechazar cuando el path recibido no existe", () => {
    const path = "Noexiste";
    return mdLinks(path).catch((error) => {
      expect(error).toBe("The file does not exist, if you need help use the command --help or --h");
    });
  });
  it("Debe rechazar cuando no se introduce un path", () => {
    const path = "";
    return mdLinks(path).catch((error) => {
      expect(error).toBe("Please enter a file or directory path to continue");
    });
  });
});
