// 010-string-vs-numeric-enums — string vs numeric enums

console.log('Lesson 010-string-vs-numeric-enums running...');

let petOnSale2 = 'chinchilla';
let ordersArray2 = [
	['rat', 2],
	['chinchilla', 1],
	['hamster', 2],
	['chinchilla', 50],
];

// Write your code below:
enum Pet {
	Hamster = 'HAMSTER',
	Rat = 'RAT',
	Chinchilla = 'CHINCHILLA',
	Tarantula = 'TARANTULA',
}

let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
	[Pet.Rat, 2],
	[Pet.Chinchilla, 1],
	[Pet.Hamster, 2],
	[Pet.Chinchilla, 50],
];

ordersArrayTS.push(['HAMSTER', 1]);
