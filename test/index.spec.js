const { mdLinks } = require("../index.js");
const { fetch } = require("../__mock__/fetch.js");

describe("mdLinks", () => {
  it("Debe ser una función", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("Deberia devolver una promesa", () => {
    return mdLinks(
      "C:\\Users\\Laboratoria\\erika\\Md-links\\DEV001-md-links\\archivoPrueba"
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
  it('{ validate: false } : Debe retornar un array con objetos href, text, file', () => {
    const pathReceived =  "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/";
        const validateFalse = [
            {
              "href": "https://www.youtube.com/watch?v=Lub5qOmY4JQ",
              "text": "recurso",
              "file": "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
            },
        ];
        expect(mdLinks(pathReceived, { validate: false })).toStrictEqual(expect.anything(validateFalse));
    });
    it('{ validate: true} : Debe retornar un array con objetos file, href, message, status, text', () => {
        const pathReceived =  "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/";
        const validateTrue = [
          {
            "href": "https://www.youtube.com/watch?v=Lub5qOmY4JQ",
            "file": "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
            "status": 200,
            "message": "OK",
            "text": "recurso",
          },
        ];
        expect(mdLinks(pathReceived, { validate: true })).toStrictEqual(expect.anything(validateTrue));
    });
});
