'use strict';

/*

Typ liczbowy

*/

var wyplata = 5000;
var premia = 2000;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;
console.log(calkowitaWyplata);

/*

Typ-lańcuch znakow 

*/

var wyplataStr = "5000";
var premiaStr = "2000";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;
console.log(calkowitaWyplataStr);

/*

Typ logiczny- boolean

*/

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog){
	console.log("Jest SMOG");
}else {
	console.log("Nie ma SMOGa ;)");
}

/*

Typ specjalny- undefined / null

*/

var nieZdefiniowanaZmienna;
var nullowaZmienna = null;

console.log (nieZdefiniowanaZmienna);
console.log (nullowaZmienna);

var imieStudenta = "Michał";
console.log(imieStudenta.indexOf('c'));