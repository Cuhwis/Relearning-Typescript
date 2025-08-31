// 007-rest-parameters — Rest Parameters

console.log('Lesson 007-rest-parameters running...');

function addPower(p: number, ...numsToAdd: number[]): number {
	let answer = 0;
	for (let i = 0; i < numsToAdd.length; i++) {
		answer += numsToAdd[i] ** p;
	}
	return answer;
}
//doesn't work
//addPower('a string', 4, 5, 6);
