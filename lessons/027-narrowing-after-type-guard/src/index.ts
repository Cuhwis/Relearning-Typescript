// 027-narrowing-after-type-guard — narrowing after type guard

console.log(
	'Lesson 027-narrowing-after-type-guard: narrowing after type guard'
);

type Metal = {
	magnetize: () => string;
};

type Glass = {
	melt: () => string;
};

const iron = {
	magnetize: () => 'Electromagnet activated',
};

const bottle = {
	melt: () => 'Furnace set to 2,700 degrees',
};

function recycle(trash: Metal | Glass) {
	// Add your code below:
	if ('magnetize' in trash) {
		return trash.magnetize();
	}

	return trash.melt();
}
