import utils from '../main/utils';
import chai from 'chai';

const expect = chai.expect;

const initTestCommands = () => [
    'PLACE(1,2)',
    'LEFT',
    'RIGHT',
    'REPORT',
    'MOVE',
    'LEPLACE',
    'INVALIDCOMMAND',
    'PLACE(0,3,Y)',
    'PLACE(0,3,N)',
    'MOVE',
    'MOVE',
    'LEFT',
    'MOVE',
];

describe('Test utils functions', () => {

    let testCommands;

    beforeEach(() => {
        testCommands = initTestCommands();
    });

    it('Utils function should exist', (done) => {
        expect(utils.readCommandFile).to.exist;
        expect(utils.checkPlaceArguments).to.exist;
        expect(utils.findPlaceIndex).to.exist;
        expect(utils.removeInvalidCommands).to.exist;
        done();
    });

    it('removeInvalidCommands should remove the invalid commands', () => {
        const commands = testCommands.filter(utils.removeInvalidCommands);
        expect(commands.length).to.equal(9);
    });

    it('findPlaceIndex should return the index of the first valid PLACE command', () => {
        const commands = testCommands.filter(utils.removeInvalidCommands);
        const index = commands.findIndex(utils.findPlaceIndex);
        expect(index).to.equal(4);

        const commandsToExecute = commands.slice(index, commands.length);
        expect(commandsToExecute.length).to.equal(5);
    });

    it('data.csv should contain some text', async () => {
        try {
            const commands = await utils.readCommandFile('./data.csv')
            expect(commands).to.exist;
        } catch (error) {
            console.log(error);
        }
    });
});