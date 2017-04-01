'use strict';
var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

imiona.push('Ola'); //wstwiamy zmienna na koniec 
console.log(imiona);

imiona.pop(); //usuwa z konca zmienna 
imiona.pop();

console.log(imiona);

console.log(imiona.unshift('Robert')); //wstawia zmienna na poczatek
console.log(imiona);

console.log(imiona.shift()); //usuwa zmienna z poczatku
console.log(imiona);

console.log(imiona.length);
imiona.push('Kaja'); //dodajemy zmienna na koniec 

for (var i = 0; i < 4; i++){
	console.log( imiona[i] );
}
for (var i = imiona.length-1; i >=0 ; i--){
	console.log( imiona[i] );
}

imiona.forEach( function (element, i) {
		console.log('Elemnt nr ' + i + '=' + element);	 
}); 

console.log(imiona.join(" - ")); //zamienia tablice na string i po miedzy nimi wstawia znak "-"

imiona.sort(); //alfabetyczne sortowanie 

imiona.reverse(); //odwrotne do alfabetycznego sortowania

console.log(imiona);

var imionaMeskie = ['Robert','Mariusz','Andrzej'];

var zbiorImion = imionaMeskie.concat(imiona); //laczenie tablic

console.log(zbiorImion);

console.log(zbiorImion.indexOf("Mariusz")); //sprawdza pod jakim indexem jest dana zmienna

console.log(Array.isArray(zbiorImion)); //sprawdza czy tablica jest tablica true/false

console.log(zbiorImion.slice(2, 5)); //wyswietla zmienne tylko od indexu 2 i konczy na 4

zbiorImion.splice(2, 3, 'Julek', 'Krzyś'); //zastepuje elementy od 2 do 3 danymi zmiennymi

console.log(zbiorImion);

console.log(zbiorImion.toString()); //zamienia na string 


