import utils from './utils';

const NORTH = 'N';
const SOUTH = 'S';
const EAST = 'E';
const WEST = 'W';
const movementPreventedMessage = '/!\\ Robot would fall off the table, movement prevented';

class Simulator {

    constructor() {
    }

    move() {
        console.log('--- Execute MOVE command --');
        switch (this._direction) {
            case NORTH:
                if(this._positionY < 4) {
                    this._positionY++;
                } else {
                    console.log(`${movementPreventedMessage}: New Y position would be: ${this._positionY+1}`)
                }
                break;
            case EAST:
                if(this._positionX < 4) {
                    this._positionX++;
                } else {
                    console.log(`${movementPreventedMessage}: New X position would be: ${this._positionX+1}`)
                }
                break;
            case SOUTH:
                if(this._positionY > 0){
                    this._positionY--;
                } else {
                    console.log(`${movementPreventedMessage}: New Y position would be: ${this._positionY-1}`)
                }
                break;
            default:
                if(this._positionX > 0){
                    this._positionX--;
                } else {
                    console.log(`${movementPreventedMessage}: New X position would be: ${this._positionX-1}`)
                }
                break;
        }
    }

    left() {
        console.log('--- Execute LEFT command --');
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
        console.log('--- Execute RIGHT command --');
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
        console.log('--- Execute REPORT command --');
        return {
            positionX: this._positionX,
            positionY: this._positionY,
            direction: this._direction
        }
    }

    place(posX, posY, direction) {
        console.log(`--- Execute PLACE command -- ; positionX: ${posX}, positionY: ${posY}, direction: ${direction}`);
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