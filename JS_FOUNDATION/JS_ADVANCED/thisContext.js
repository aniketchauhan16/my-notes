const person = {
	name: "Aniket",
	greet() {
		console.log(`HI MY name is ${this.name}`);
	},
};

person.greet();

const greetfunction = person.greet;
greetfunction();

const boundgreet = person.greet.bind({ name: "Aniket" });
boundgreet();
