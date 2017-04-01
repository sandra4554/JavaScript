'use strict';
/* 

1.Nigdy nie nazywam zmiennych globlanych tak jak parametrow funkcji 
2.Nigdy nie nazywamy zmiennych globalnych tak jak zmiennych lokalnych
3.Nigdy nie nazywamy zmiennych lokalnych tak jak parametrow funkcji
4.Staramy sie nie uzywac zmiennych globalnych wewnatrz funkcji chyba ze w ostatecznosci zachodzi taka potrzeba 

*/
var liczba1 = 3, liczba2 = 5, liczba3 = 40;

function multiply(parametr1,parametr2,parametr3) {
	var result;
	
	result = parametr1 * parametr2 * parametr3;
	
	return result;
}
var wynik = multiply(liczba1, liczba2, liczba3);
console.log(wynik);