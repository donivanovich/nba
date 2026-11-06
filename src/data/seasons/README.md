# Añadir una temporada

1. Crea una carpeta con el nombre de temporada, por ejemplo `25-26`.
2. Añade dentro `players.json`, `stats.json` y un `index.ts` que los importe,
   use el `teams.json` compartido de `src/data/` y exporte el objeto
   `SeasonData`, siguiendo el ejemplo de `26-27/index.ts`.
3. Guarda las fotos de esa temporada en
   `public/images/seasons/{temporada}/players/`, con nombres normalizados
   `nombre-apellido.png`, y usa esas rutas en el campo `photo` de su
   `players.json`.
   Si `photo` contiene el formato antiguo `/images/players/...`, la app le añade
   automáticamente la carpeta de la temporada al resolver la imagen.

El registro de temporadas y el selector de la página principal detectan
automáticamente las carpetas que contienen `index.ts`.

## Datos `25-26`

`players.json` y `stats.json` contienen 582 jugadores de la temporada regular
2025-26 que disputaron al menos un partido. Los totales tradicionales proceden de un
[CSV público de estadísticas NBA](https://github.com/Nelson-Wasike/NBA_2026_Player_Performance_Analysis)
y se contrastaron con ESPN para 530 jugadores. Para los otros 52 se conservaron
los totales del CSV; los campos auxiliares no disponibles en esa fuente
(titularidades, faltas técnicas o flagrantes, expulsiones, dobles/triples-dobles
y `plusMinus`) quedan en cero.

Los jugadores están agrupados por el ID de equipo de `teams.json`; los IDs de
jugador y las referencias `playerId` de las estadísticas van del 1 al 582. Al
contar a todos los que jugaron, algunos equipos superan los 18 integrantes de
una plantilla habitual (por ejemplo, por cambios de equipo durante la temporada).

Los perfiles disponibles reutilizan datos de jugadores de `26-27`. Los perfiles
incompletos se completaron contrastando datos biográficos de ESPN, NBA/G League
y `Player_table.csv`; las banderas usan rutas por país y las fechas de debut
corresponden al primer partido de temporada regular registrado en ESPN,
contrastado con
[Player_table.csv](https://github.com/AlirezaNyi/Data-Analysis-Projects-2-Basketball/blob/main/data/Player_table.csv)
cuando había una biografía coincidente. Para jugadores sin perfil de ESPN, se
usaron sus primeras apariciones verificadas en los marcadores y box scores de
la temporada. Los perfiles sin clasificación de status disponible se marcan
como `Role Player`; la mano dominante no disponible se establece como `Right`.

Se han recuperado 32 fotos de capturas del CDN de NBA archivadas durante la
temporada 2025-26 en [Internet Archive](https://web.archive.org/). Los 582
registros tienen una ruta `photo` con el nombre normalizado
`nombre-apellido.png`, aunque el archivo no esté disponible. Solo 32 imágenes
históricas están presentes; no se utilizan retratos actuales como sustituto.
