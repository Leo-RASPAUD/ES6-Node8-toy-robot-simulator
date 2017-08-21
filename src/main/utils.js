import fs from 'fs';
import util from 'util';
const readFileAsync = util.promisify(fs.readFile);

const checkPlaceArguments = (positionX, positionY, direction) => {
    const numberType = 'number';
    if ((!!0 && !positionX) || !positionY || !direction) {
        throw new Error('Simulator.place() : Should take exactly 3 argument');
    }

    if (typeof positionX !== numberType || typeof positionY !== numberType || typeof direction !== 'string') {
        throw new Error('Simulator.place() : Wrong argument type');
    }
}

const readCommandFile = async (filePath) => {
    return await readFileAsync(filePath, { encoding: 'utf8' });
}

const removeInvalidCommands = (command) => {
    return (command === 'MOVE' || command === 'RIGHT' || command === 'LEFT' || command === 'REPORT' || isPlaceCommandValid(command));
}

const findPlaceIndex = (command) => {
    return command.match('PLACE') ? true : false;
}

const isPlaceCommandValid = (command) => {
    return command.match(/PLACE\(\d,\d,[NESW]\)/) ? true : false;
}

const getPlaceArguments = (placeCommand) => {
    const splitCharacters = placeCommand.split('(')[1].split(',');
    const posX = Number(splitCharacters[0]);
    const posY = Number(splitCharacters[1]);
    const direction = splitCharacters[2].split(')')[0];

    return {
        posX,
        posY,
        direction
    }
}

const executeCommand = (command, simulator) => {
    switch (command) {
        case 'MOVE':
            simulator.move();
            break;
        case 'LEFT':
            simulator.left();
            break;
        case 'RIGHT':
            simulator.right();
            break;
        case 'REPORT':
            return simulator.report();
        default:
            const placeArguments = getPlaceArguments(command);
            simulator.place(placeArguments.posX, placeArguments.posY, placeArguments.direction);
            break;
    }
}

export default {
    checkPlaceArguments,
    readCommandFile,
    findPlaceIndex,
    removeInvalidCommands,
    executeCommand
}