import utils from './utils';
import Simulator from './simulator';

const invalidPlaceFormatLog = 'Invalid place format, remove it from the commands';

console.log('---------------------------------');
console.log('Robot toy simulator');
console.log('---------------------------------\n');

const main = async () => {
    const simulator = new Simulator();
    try {
        const file = await utils.readCommandFile('./data.csv');

        let commands = file.split('\n')
            .map(command => command.toUpperCase()
            .trim())
            .filter(utils.removeInvalidCommands);

        const indexOfFirstPlace = commands.findIndex(utils.findPlaceIndex);
        commands = commands.slice(indexOfFirstPlace, commands.length);

        
        for (let i = 0; i < commands.length; i++) {
            utils.executeCommand(commands[i], simulator);
        }
        const report = simulator.report();
        console.log('\n---------------------------------');
        console.log(`Final position : positionX : ${report.positionX}, positionY : ${report.positionY}, direction : ${report.direction}`);
        console.log('---------------------------------');
    } catch (error) {
        console.log(error);
    }
}

main();