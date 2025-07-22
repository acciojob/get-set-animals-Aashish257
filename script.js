//complete this code
class Animal {
	constructor(species: string) {
		this.species = species;
	}

	get species() {
		return this.species;
	}

	makeSound() {
		console.log(`The ${this.species} make a sound`);
	}
}

class Dog extends Animal {
	constructor(species: string) {
		super(species: string);
	}

	bark() {
		console.log(`woof`);
	}
}

class Cat extends Animal {
	constructor(species: string) {
		super(species: string);
	}

	purr() {
		console.log(`purr`);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
