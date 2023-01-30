 # Md-Links  🔎⌨️ ⭐️⭐️⭐️
![welcome](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/Welcome.png)

## Indice

🔹Acerca de Md-links.

🔹Como instalar Md-links.

🔹Como usar Md-links.

🔹Opciones de comandos.

🔹Sin opciones.

🔹Errores.

🔹Como desinstalar Md-links.

🔹Diagramas de flujo.

## Acerca de Md-links.

Markdown es un lenguaje de marcado ligero muy popular entre los desarrolladores. Se usa en muchas plataformas que manejan texto plano (GitHub, foros, blogs,...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos de Markdown suelen contener enlaces que a menudo están rotos o ya no son válidos y eso daña en gran medida el valor de la información que desea compartir.

En este proyecto, md-linksse encuentra un ejecutable que lee y analiza archivos en formato Markdown, para verificar los enlaces que contienen y reportar algunas estadísticas.

## Como instalar Md-links.

Para instalar Md-links solo debes escribir en la terminal el siguiente comando:

npm i md-links


![instalar](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/comando%20para%20instalar%20md-links.png)

## Como usar Md-links.

🔹Use:

md-links + [La ruta del archivo, (ejemplo: ./nombredeCarperta)] + [Opciones de comandos]

🔹Opciones de comandos:

**(--validate o --v )** ➡️  Para ver enlaces de validación, realiza una solicitud HTTP para saber si el enlace funciona o no.

**( --validate o --stats )** ➡️  Para ver estadísticas  sobre enlaces : total, unicos, y  rotos.

**(--stats o --s )** ➡️ Para ver estadísticas  sobre enlaces.

**(--v  o  --s )** ➡️ Para ver estadísticas  sobre enlaces : total, unicos, y  rotos.

**(--help o --h)** ➡️ Para ver el menú que muestra todos los comandos.


🔹Ejemplos:

**(--validate o --v )**

Para validar si el directorio o archivo tiene links con estatus valido o fallo.
Ejemplo:

![--validate o --v](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/options%20--validate.png)


**( --validate o --stats )**

Para ver el total de links dentro del directorio o archivo, cuantos son unicos y cuantos estan rotos.
Ejemplo:

![--validate o --stats](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/validate%20y%20stats.png)


**(--stats o --s )** 

Muestra la cantidad de links y cuantos son unicos.
Ejemplo:

![--stats o --s](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/--stats.png)


**(--v  o  --s )** 

Para ver el total de links dentro del directorio o archivo, cuantos son unicos y cuantos estan rotos.
Ejemplo:

![--v  o  --s ](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/--v%20--s.png)


**(--help o --h)**

Para ver el menú de comando que puedes usar.
Ejemplo:

![--help o --h](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/--help.png)

## Sin Opciones 

🔹Si solo se introduce la ruta sin ninguna opción.

![validate=false](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/noOptions.png)


## Errores

🔹 Si no se introduce ninguna ruta de directorio o archivo se muestra el  siguiente mensaje:

![error](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/error%20ingrese%20un%20path.png)

🔹Si la ruta no existe se muestra el siguiente mensaje:

![error](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/error%20el%20path%20no%20existe.png)


**(Opcion errorea)**

🔹 Si la opción que introduces no es ninguna de las que aparece en el menú de ayuda, la terminal te mostrará el siguiente error.

![option-invalide](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/error%20comando%20invalido.png)



## Como desinstalar Md-links

Para desinstalar Mde-links solo  debes ingresar en la terminal en la ubicación del archivo donde la has instalado el siguiente comando:

npm uninstall -D md-links

![desinstalar](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/comando%20para%20desinstalar%20md-links.png)


## Diagrama de flujo de Md-links

![Diagrama](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/diagrama%20de%20flujo%20API.png)

## Diagrama de flujo de linea de comando

![LineaComando](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/Diagrama%20de%20flujo%20de%20cli.png)
