'use strict';

var wzrostMateusza = 190;
var wzrostOlgi = 160;

/*
	Warunek if

*/

if (wzrostOlgi < wzrostMateusza) {
	console.log("Olga jest niższa :)");
} 

/*
	Warunek if else

*/

if (wzrostOlgi > wzrostMateusza) {
	console.log("Olga jest niższa :)");
} else {
	console.log("Olga jest wyższa");
}

/*
	Warunek if else if

*/

if (wzrostOlgi > wzrostMateusza) {
	console.log("Olga jest wyższa :)");
} else if (wzrostOlgi == wzrostMateusza) {
	console.log("Olga jest tak wysoka jak Mateusz");
} else {
	console.log("Olga jest niższa");
}

/*
	Warunek switch

*/
var kolor = 'zielony';

switch (kolor) {
	case 'czerwony':
		console.log('Kolor czerwony')
		break;
	case 'zielony':
		console.log('Kolor zielony')
		break;
	case 'niebieski':
		console.log('Kolor niebieski')
		break;
	default:
		console.log('Inny kolor')
}

