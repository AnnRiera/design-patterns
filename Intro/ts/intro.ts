console.log('Hola desde TS 2');

class Drinks {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }
}