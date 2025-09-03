// 009-Enums — enums in typescript

console.log('Lesson 009-Enums running...');

let petOnSale = 'chinchilla';
let ordersArray = [
	['rat', 2],
	['chinchilla', 1],
	['hamster', 2],
	['chinchilla', 50],
];

// Write your code below:

enum Pet {
	Hamster,
	Rat,
	Chinchilla,
	Tarantula,
}
let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
	[Pet.Rat, 2],
	[Pet.Chinchilla, 1],
	[Pet.Hamster, 2],
	[Pet.Chinchilla, 50],
];

//Now that we have a type safe orders array, let’s see what happens when someone tries to order a pet that the shop does not carry. Attempt to add an order for 3 jerboas by adding the code ordersArrayTS.push([Pet.Jerboa, 3]);

//ordersArrayTS.push([Pet.Jerboa, 3]);
