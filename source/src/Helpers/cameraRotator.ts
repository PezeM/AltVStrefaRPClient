import * as alt from 'alt';
import * as game from 'natives';
import { drawText } from 'source/src/Helpers/uiHelper';
import Camera from 'source/src/Helpers/camera';

interface Point {
    x: number;
    y: number;
}

class CameraRotator {
    camera: Camera;
    basePosition: Vector3;
    lookAtPosition: Vector3;
    offsetVector: Vector3;
    heading: number;
    baseHeading: number;
    currentPoint: Point;
    isPause: boolean;
    zUp: number;
    zUpMultipler: number;
    xBound: number[];
    zBound: number[];
    isActive: boolean;
    renderTick: number;
    constructor() {
        this.renderTick = alt.setInterval(this.render.bind(this), 0);
    }

    start(camera: Camera, basePosition: Vector3, lookAtPosition: Vector3, offsetVector: Vector3, heading: number, fov: boolean | number = false) {
        this.camera = camera;
        this.basePosition = basePosition;
        this.lookAtPosition = lookAtPosition;
        this.offsetVector = offsetVector;
        this.heading = heading;
        this.baseHeading = heading;
        this.currentPoint = { x: 0, y: 0 };
        this.isPause = false;
        this.zUp = 0;
        this.zUpMultipler = 1;
        this.xBound = [0, 0];
        this.zBound = [-0.01, 0.8];

        this.changePosition();

        this.camera.pointAtCoord(lookAtPosition.x, lookAtPosition.y, lookAtPosition.z);

        if (fov) {
            this.camera.setFov(fov as number);
        }

        this.activate(true);
    }

    pause(state: boolean) {
        this.isPause = state;
    }

    stop() {
        this.activate(false);
    }

    reset() {
        this.heading = this.baseHeading;
        this.zUp = 0;
        this.changePosition();
    }

    setXBound(min: number, max: number) {
        this.xBound = [min, max];
    }

    setZBound(min: number, max: number) {
        this.zBound = [min, max];
    }

    setZUpMultipler(value: number) {
        this.zUpMultipler = value;
    }

    getRelativeHeading() {
        return this.normilizeHeading(this.baseHeading - this.heading);
    }

    activate(state: boolean) {
        this.isActive = state;
    }

    onMouseMove(dX: number, dY: number) {
        this.heading = this.normilizeHeading(this.heading + dX * 100);

        let relativeHeading = this.getRelativeHeading();

        if (relativeHeading > this.xBound[0] && relativeHeading < this.xBound[1]) {
            relativeHeading = Math.abs(this.xBound[0] - relativeHeading) > Math.abs(this.xBound[1] - relativeHeading)
                ? this.xBound[1]
                : this.xBound[0];
        }

        this.heading = this.normilizeHeading(-relativeHeading + this.baseHeading);
        this.zUp += dY * this.zUpMultipler * -1;

        if (this.zUp > this.zBound[1]) {
            this.zUp = this.zBound[1];
        } else if (this.zUp < this.zBound[0]) {
            this.zUp = this.zBound[0];
        }

        this.changePosition();
    }

    changePosition() {
        const position = game.getObjectOffsetFromCoords(this.basePosition.x, this.basePosition.y,
            this.basePosition.z + this.zUp, this.heading, this.offsetVector.x, this.offsetVector.y, this.offsetVector.z);
        this.camera.setCoord(position.x, position.y, position.z);
    }

    isPointEmpty() {
        return this.currentPoint.x === 0 && this.currentPoint.y === 0;
    }

    setPoint(x: number, y: number) {
        this.currentPoint = { x, y };
    }

    getPoint() {
        return this.currentPoint;
    }

    render() {
        if (!this.isActive || this.isPause)
            return;

        const x = game.getDisabledControlNormal(2, 239);
        const y = game.getDisabledControlNormal(2, 240);

        if (this.isPointEmpty()) {
            this.setPoint(x, y);
        }

        const currentPoint = this.getPoint();
        const dX = currentPoint.x - x;
        const dY = currentPoint.y - y;

        this.setPoint(x, y);

        // this.drawDebugText();

        // On left mouse hold
        if (game.isDisabledControlPressed(2, 237)) {
            this.onMouseMove(dX, dY);
        }
    }

    drawDebugText() {
        let message = `zUp: ${this.zUp.toFixed(3)}`;

        message += `\nHeading: ${this.heading.toFixed(2)}`;
        message += `\nBase Heading: ${this.baseHeading.toFixed(2)}`;
        message += `\nRelative Heading: ${this.getRelativeHeading().toFixed(2)}`;

        drawText(message, [0.5, 0.005], 4, [255, 255, 255, 185], 0.8, true, true);
    }


    private normilizeHeading(heading: number) {
        if (heading > 360) {
            heading = heading - 360;
        } else if (heading < 0) {
            heading = 360 + heading;
        }

        return heading;
    }
}

const cameraRotator = new CameraRotator();
export default cameraRotator;

