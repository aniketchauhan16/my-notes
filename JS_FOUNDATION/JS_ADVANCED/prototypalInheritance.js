function Person(name) {
	this.name = name;
}

Person.prototype.greet = function () {
	console.log(`Hello My Name Is ${this.name}`);
};

let anix = new Person("ANiket");
anix.greet();
