# Lancement de l'application

## Initialisation

`npm install`

Installe toutes les dépendances

`npm run generate:dotenv`

Génère les variables d'environnement

Modifier les variables d'environnment dans le fichier `.env`

## Lancement

`npm start`


# Lancement des tests

`npm test`

Lance les test

`npm test:log:OK`

Lance les tests et les enregistre dans un fichier .log un test dans le repertoire /tmp/testlog/{YYYY_MM_DD_HH_mm_SS_OK}.log


`npm test:log:KO`

Lance les tests et les enregistre dans un fichier .log un test dans le repertoire /tmp/testlog/{YYYY_MM_DD_HH_mm_SS_KO}.log

Pour vérifier les tests dans le terminal executer `cat nomdufichier.log`


