import utils from './utils';
import Simulator from './simulator';
import Table from './table';

const invalidPlaceFormatLog = 'Invalid place format, remove it from the commands';

console.log('---------------------------------');
console.log('Robot toy simulator');
console.log('---------------------------------\n');

const main = async () => {
    const table = new Table(5,5);
    const simulator = new Simulator(table);
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
        const report = utils.executeCommand('REPORT', simulator);
        console.log('\n---------------------------------');
        console.log(`Final position : positionX : ${report.positionX}, positionY : ${report.positionY}, direction : ${report.direction}`);
        console.log('---------------------------------');
    } catch (error) {
        console.log(error);
    }
}

main();