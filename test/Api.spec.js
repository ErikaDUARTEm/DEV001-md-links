const Api = require("../Api.js");
const { fetch } = require("../__mock__/fetch.js");

//isPathAbsolute
describe("pathRelative", () => {
  it("Debe ser una función", () => {
    expect(typeof Api.pathRelative).toBe("function");
  });
  it("Deberia retornar true si es un path absoluto", () => {
    expect(
      Api.pathRelative(
        "C:\\Users\\Laboratoria\\erika\\Md-links\\DEV001-md-links\\archivoPrueba\\prueba.md"
      )
    ).toBe(true);
  });
  it("Deberia retornar false si no es un path absoluto", () => {
    expect(Api.pathRelative(".\\prueba.md")).toBe(false);
  });
});

//Existe el path
describe("isPathValid", () => {
  it("Debe ser una función", () => {
    expect(typeof Api.isPathValid).toBe("function");
  });

  it("Deberia retornar true si el path existe", () => {
    expect(Api.isPathValid(__dirname)).toBeTruthy();
  });

  it("Deberia retornar false si el path no existe", () => {
    expect(Api.isPathValid(`${__dirname}ss`)).toBeFalsy();
  });
});

//Path Definitivo
describe("pathDefinitive: función que convierte el path relativo en path absoluto", () => {
  it("Deberia ser una función", () => {
    expect(typeof Api.pathDefinitive).toBe("function");
  });
  it("Deberia convertir un path relativo en absoluto", () => {
    expect(Api.pathDefinitive("./archivoPrueba")).toBe(
      "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba"
    );
  });
});
//Función de extensión md
describe("Api.pathFileMd", () => {
  it("Debe devolver array de archivos .md", () => {
    expect(typeof Api.pathFileMd).toBe("function");;
  });
  it('Debe retornar array con archivos y directorios que contengan .md', () => {
    expect(Api.pathFileMd('./archivoPrueba'))
    .toEqual([
      "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/archivo.md",
      "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/prueba.md",
      "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
    ]);
  });
  it('Debe retorns', () => {
    expect(Api.pathFileMd('./archivoPrueba/segundoArchivoP'))
    .toEqual([
      "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md"
    ]);
  });
  it('should return the files from a directory', () => {
    expect(Api.pathFileMd('./archivoPrueba/prueba.md')).toEqual(["C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/prueba.md"]);
  });
});

//Función que lee archivos
describe("readFiles", () => {
  it("Debe ser una función", () => {
    expect(typeof Api.readFiles).toBe("function");
  });
  it("Deberia devolver una promesa", () => {
    return Api.readFiles(
      "C://Users//Laboratoria//erika//Md-links//DEV001-md-links//archivoPrueba"
    )
      .then(() => {
        expect(Api.readFiles).toBe(typeof Promise);
      })
      .catch((error) => {error});
  });
  it("Debe devolver un array con objetos", () => {
    const pathReceived = "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md";
    const file = [
      {
        "href": "https://www.youtub.com/watch?+v=Lub5qOmY4JQ",
        "text": "recurso",
        "file": "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
      },
    ]
    return Api.readFiles(pathReceived).then((res) => {
      expect(res).toEqual(file);
    });
  })
});

//Función ValidateLinks
const data = [
  {
    "href": "https://www.youtube.com/watch?v=Lub5qOmY4JQ",
    "text": "recurso",
    "file": "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
  },
];

const dataError = [
  {
    "href": "https://www.youtube.",
    "text": "recurso",
    "file": "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
  },
];

describe("validateLinks() Valida los links con fetch", () => {
  it("validateLinks() debe ser una función", () => {
    expect(typeof Api.validateLinks).toBe("function");
  });
  it("Debe retornar mensaje Ok y validar status de links", () => {
    const output = [
      {
        "href": "https://www.youtube.com/watch?v=Lub5qOmY4JQ",
        "file": "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
        "status": 200,
        "message": "OK",
        "text": "recurso",
      },
    ];
    fetch.mockResolvedValue(data);
    return Api.validateLinks(data).then((res) => {
      expect(res).toEqual(output);
    });
  });
  it("Debe retornar mensaje de error No status", () => {
    const outputError = [
      {
        "href": "https://www.youtube.",
        "file": "C:/Users/Laboratoria/erika/Md-links/DEV001-md-links/archivoPrueba/segundoArchivoP/prueba2.md",
        "status": "Fail request to https://www.youtube./ failed, reason: getaddrinfo ENOTFOUND www.youtube.",
        "message": "No status",
        "text": "recurso",
      },
    ];
    fetch.mockResolvedValue(dataError);
    return Api.validateLinks(dataError).then((res) => {
      expect(res).toEqual(outputError);
    });
  });
});
