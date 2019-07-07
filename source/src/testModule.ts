import * as alt from 'alt';
import * as game from 'natives';

class TestClass {
    tickInterval: number;
    className: string;
    constructor() {
        alt.log('eldo');
        this.tickInterval = alt.setInterval(this.render.bind(this), 100);
        this.className = "Cos tam wiesz";
    }

    render() {
        alt.log('On render');
    }
}

const newClass = new TestClass();
export default newClass;