// 032-optional-type-members — optional type members

console.log('Lesson 032-optional-type-members: optional type members');

// Write an interface here
interface UserNameOptions {
	firstName?: string;
	lastName?: string;
	username: string;
}
function getUserName(options: UserNameOptions) {
	if (options.firstName && options.lastName) {
		return console.log(`${options.firstName} ${options.lastName}`);
	}

	return console.log(options.username);
}

getUserName({
	firstName: 'Mr.',
	lastName: 'Oshiro',
	username: 'hotelowner304',
});

getUserName({
	firstName: 'Madeline',
	username: 'mountainClimber',
});
