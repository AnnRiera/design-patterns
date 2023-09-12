// OOP:

class Drink {
    constructor(name) {
        this.name = name;
    }

    info() {
        return `La bebida es: ${this.name}`;
    }
}

// Inherit:

class Beer extends Drink {
    constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol;
    }

    info() {
        return `${super.info()}, level of alcohol: ${this.alcohol}`;
    }
}