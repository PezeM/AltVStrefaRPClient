export default class IdGenerator {
    private counter: number;
    constructor(startNumber: number) {
        this.counter = startNumber;
    }

    getNextId() {
        return ++this.counter;
    }
}