# Añadir una temporada

1. Crea una carpeta con el nombre de temporada, por ejemplo `25-26`.
2. Añade dentro `players.json`, `stats.json` y un `index.ts` que los importe,
   use el `teams.json` compartido de `src/data/` y exporte el objeto
   `SeasonData`, siguiendo el ejemplo de `26-27/index.ts`.
3. Guarda las fotos de esa temporada en `public/images/seasons/25-26/players/`
   y usa esas rutas en el campo `photo` de su `players.json`. Los archivos
   actuales de `public/images/seasons/26-27/players/` se mantienen para `26-27`.
   Si `photo` contiene el formato antiguo `/images/players/...`, la app le añade
   automáticamente la carpeta de la temporada al resolver la imagen.

El registro de temporadas y el selector de la página principal detectan
automáticamente las carpetas que contienen `index.ts`.

## Fixture `25-26`

La carpeta `25-26` es un conjunto de prueba con tres jugadores de cada equipo y
estadísticas sintéticas para comprobar la navegación y las pantallas entre
temporadas. No representa datos históricos oficiales; sus rutas de foto
reutilizan las imágenes de `26-27`. Reemplázalo con los JSON y fotos reales
cuando estén disponibles.
