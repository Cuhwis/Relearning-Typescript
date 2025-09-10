// 018-type-narrowing — type narrowing

console.log('Lesson 018-type-narrowing running...');

function formatValue(value: string | number) {
	// Write your code here
	if (typeof value === 'string') {
		console.log(value.toLowerCase());
	}
	if (typeof value === 'number') {
		console.log(value.toFixed(2));
	}
}

formatValue('Hiya');
formatValue(42);
