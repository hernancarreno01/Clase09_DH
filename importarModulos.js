/*
Nuestro objetivo será crear 3 variables: moduloNativo, moduloInstalado y moduloPropio, 
en donde cada una almacenará un módulo distinto.

La primera deberá requerir el módulo http, la segunda el módulo axios y la 
tercera un módulo local exportado del archivo miFuncion. Este último archivo 
se encuentra en la misma carpeta que nuestro script.js.
*/
var moduloNativo = require('http');
var moduloInstalado = require('axios');
var moduloPropio = require('./miFuncion');
