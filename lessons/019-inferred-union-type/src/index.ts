// 019-inferred-union-type — inferred union type

console.log('Lesson 019-inferred-union-type running...');

type User = {
	id: number;
	username: string;
};

function createUser() {
	const randomChance = Math.random() >= 0.5;

	if (randomChance) {
		return { id: 1, username: 'nikko' };
	} else {
		return 'Could not create a user.';
	}
}

let userData: string | User = createUser();
