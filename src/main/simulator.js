import utils from './utils';

const NORTH = 'N';
const SOUTH = 'S';
const EAST = 'E';
const WEST = 'W';

class Simulator {

    constructor() {
    }

    move() {
        switch (this._direction) {
            case NORTH:
                this._positionY++;
                break;
            case EAST:
                this._positionX++;
                break;
            case SOUTH:
                this._positionY--;
                break;
            default:
                this._positionX--;
                break;
        }
    }

    left() {
        switch (this._direction) {
            case NORTH:
                this._direction = WEST;
                break;
            case EAST:
                this._direction = NORTH;
                break;
            case SOUTH:
                this._direction = EAST;
                break;
            default:
                this._direction = SOUTH;
                break;
        }
    }

    right() {
        switch (this._direction) {
            case NORTH:
                this._direction = EAST;
                break;
            case EAST:
                this._direction = SOUTH;
                break;
            case SOUTH:
                this._direction = WEST;
                break;
            default:
                this._direction = NORTH;
                break;
        }
    }

    report() {
        return {
            positionX: this._positionX,
            positionY: this._positionY,
            direction: this._direction
        }
    }

    place(posX, posY, direction) {
        utils.checkPlaceArguments(posX, posY, direction);
        this.positionX = posX;
        this.positionY = posY;
        this._direction = direction;
    }

    set positionX(positionX) {
        this._positionX = positionX;
    }

    set positionY(positionY) {
        this._positionY = positionY;
    }

    set direction(direction) {
        this._direction = direction;
    }

}

export default Simulator;