// 017-union-types — union types

console.log('Lesson 017-union-types running...');

function printNumsAndStrings(statement: string | number) {
	console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings('hello!');
printNumsAndStrings(67);
