class Singleton {
    // Another way to return the instance.
    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        this.random = Math.random();

        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
    }
}