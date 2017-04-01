'use strict';
/*

Operator 

*/

//var wiekSandry = 21;
//
//if (wiekSandry > 22) {
//	console.log("wiekszy");
//}else {
//	console.log("mniejszy lub rowny")
//}
// 
//(wiekSandry > 22) ? console.log("wiekszy"):
//console.log("mniejszy lub rowny");

var liczba1 = 13, liczba2 = 5;
var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

while (liczba1 < liczba2) {
	console.log(liczba1);
	--liczba1;
}

if ("2"=== 2) {
	console.log("prawda");
} else {
	console.log("nieprawda");
}

if (!(("2" !== 2) && (8 < 4))) {
	document.write("<br> prawda");
}