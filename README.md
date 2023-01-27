 # Md-Links  🔎⌨️ ⭐️⭐️⭐️
![welcome](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/Welcome.png)

## Indice

🔹Acerca de Md-links.

🔹Como instalar Md-links.

🔹Como usar Md-links.

🔹Opciones.

## Acerca de Md-links.

Markdown es un lenguaje de marcado ligero muy popular entre los desarrolladores. Se usa en muchas plataformas que manejan texto plano (GitHub, foros, blogs,...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos de Markdown suelen contener enlaces que a menudo están rotos o ya no son válidos y eso daña en gran medida el valor de la información que desea compartir.

En este proyecto, md-linksse encuentra un ejecutable que lee y analiza archivos en formato Markdown, para verificar los enlaces que contienen y reportar algunas estadísticas.

## Como instalar Md-links.

ESTA PARTE SE ENCUENTRA EN DESARROLLO.

## Como usar Md-links.

🔹Use:

md-links + [El path del archivo, (ejemplo: ./nombredeCarperta)] + [Opciones de comandos ]

🔹Comandos:

**(--validate o --v )** ➡️  Para ver enlaces de validación, realiza una solicitud HTTP para saber si el enlace funciona o no.

**( --validate o --stats )** ➡️  Para ver estadísticas  sobre enlaces : total, unicos, y  rotos.

**(--stats o --s )** ➡️ Para ver estadísticas  sobre enlaces.

**(--v  o  --s )** ➡️ Para ver estadísticas  sobre enlaces : total, unicos, y  rotos.

**(--help o --h)** ➡️ Para ver el menú que muestra todos los comandos.

## Opciones. 

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

**(No hay opciones)**

🔹 Si no se introduce ninguna ruta de directorio o archivo se muestra el  siguiente mensaje:

![error](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/error%20ingrese%20un%20path.png)

🔹Si la ruta no existe se muestra el siguiente mensaje:

![error](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/error%20el%20path%20no%20existe.png)

🔹Si solo se introduce la ruta sin ninguna opción.

![validate=false](https://raw.githubusercontent.com/ErikaDUARTEm/DEV001-md-links/main/img/noOptions.png)