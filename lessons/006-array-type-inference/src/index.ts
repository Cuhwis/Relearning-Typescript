// 006-array-type-inference — type inference

console.log('Lesson 006-array-type-inference running...');

// Don't change this part:
let dogTup: [string, string, string, string] = [
	'dog',
	'brown fur',
	'curly tail',
	'sad eyes',
];

// Your code goes here:
let myArr = dogTup.concat(['lesson']);
myArr[50] = 'not a dog';
