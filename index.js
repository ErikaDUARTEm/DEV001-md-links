const Api = require('./Api.js');


//Funcion mdLinks
const mdLinks = (pathReceived, options) => {
  return new Promise((resolve, reject) => {
    if (pathReceived) {
      // Verifica si existe y es absoluta, sino convertirla en Absoluta
      if (Api.isPathValid(pathReceived)) {
        pathReceived = Api.pathDefinitive(pathReceived);
          if(Api.pathFileMd(pathReceived)){
          const arrayPaths = Api.pathFileMd(pathReceived);
          if(arrayPaths === []){
            reject('There are no files with the extension .md')
          }else{
            let arrayFiles = Promise.all(arrayPaths.map((file) => Api.readFiles(file)
            .then((resp)=> resp).catch((error)=> console.log(`${error}`))));
            if (options.validate === false){
              resolve(arrayFiles);
              } else if(options.validate === true){ // Validate ===true
              let array = arrayFiles.then(links => Api.validateLinks(links.flat()));
              resolve(array)
              }  
          }
        }
      } else {
        //  Si no existe la ruta se rechaza la promesa.
        reject(`The file does not exist, if you need help use the command --help or --h`);
      }
    }
  })
}
module.exports = { mdLinks };
