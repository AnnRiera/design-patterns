// OOP:

class DrinkOOP {
    private name: string;

    constructor(name) {
        this.name = name;
    }

    info() {
        return `La bebida es: ${this.name}`;
    }
}

// Interface:

interface Product {
    price: number;
    getPrice(): string;
}

// Inherit:

class BeerOOP extends DrinkOOP implements Product {
    private alcohol: string;
    price: number;

    constructor(name: string, alcohol: string) {
        super(name);
        this.alcohol = alcohol;
    }

    info() {
        return `${super.info()}, level of alcohol: ${this.alcohol}`;
    }

    getPrice() {
        return `Price: ${this.price}`;
    }
}

class Snack implements Product {
    price: number;
    
    getPrice(): string {
        return `The price is: $${this.price}`
    }
}