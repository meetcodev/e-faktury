
https://github.com/marekmitko/accounting-app-prototype-v5-0-0

{
  "name": "accounting-app-prototype-v5-0-0",
  "version": "5.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "server": "json-server --watch db.json --port 5000 --middlewares ./range.js",
    "client": "npm start --prefix client",
    "goall": "concurrently \"npm run server\" \"npm run client\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "concurrently": "^5.3.0",
    "content-range": "^1.1.0",
    "faker": "^5.5.3",
    "json-server": "^0.16.2"
  }
}