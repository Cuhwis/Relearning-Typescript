// 004-multidimensional-arrays — arrays with multi dimensions

console.log('Lesson 004-multidimensional-arrays running...');

// Arrays:
let bestNumbers2: number[] = [7, 77, 4];
let bestLunches2: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts2: string[] = [
	'fasting',
	'oatmeal',
	'tamago kake gohan',
	'any kind of soup',
];
let bestBooleans2: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [
	bestLunches2,
	bestBreakfasts2,
	['baked potato', 'mashed potato'],
];
let bestBooleansTwice: boolean[][] = [bestBooleans2, bestBooleans2];
let numbersMulti: number[][][] = [
	[[1], [2, 3]],
	[[7], bestNumbers2],
];
