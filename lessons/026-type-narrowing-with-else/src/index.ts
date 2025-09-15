// 026-type-narrowing-with-else — type narrowing with else

console.log('Lesson 026-type-narrowing-with-else: type narrowing with else');
type Pasta = {
	menuName: string;
	boil: () => string;
};

type Meat = {
	menuName: string;
	panFry: () => string;
};

const fettuccine = {
	menuName: 'Fettuccine',
	boil: () => 'Heat water to 212 degrees',
};

const steak = {
	menuName: 'New York Strip Steak',
	panFry: () => 'Heat oil to 350 degrees',
};

function prepareEntree(entree: Pasta | Meat) {
	if ('boil' in entree) {
		return entree.boil();
	} else {
		return entree.panFry();
	}
}

console.log(prepareEntree(fettuccine));
