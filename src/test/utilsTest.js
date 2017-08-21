import utils from '../main/utils';
import Simulator from '../main/simulator';
import Table from '../main/table';
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
    let simulator;

    beforeEach(() => {
        const table = new Table(5,5);
        simulator = new Simulator(table);
        simulator.place(2, 2, 'N');
        testCommands = initTestCommands();
    });

    it('Utils function should exist', (done) => {
        expect(utils.readCommandFile).to.exist;
        expect(utils.checkPlaceArguments).to.exist;
        expect(utils.findPlaceIndex).to.exist;
        expect(utils.removeInvalidCommands).to.exist;
        expect(utils.executeCommand).to.exist;
        done();
    });

    it('executeCommand(MOVE) should place the toy to {x:2, y:3, direction : N}', () => {
        utils.executeCommand('MOVE', simulator);
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(3);
        expect(report.direction).to.equal('N');
    });

    it('executeCommand(LEFT) should place the toy to {x:2, y:3, direction : W}', () => {
        utils.executeCommand('LEFT', simulator);
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('W');
    });

    it('executeCommand(RIGHT) should place the toy to {x:2, y:3, direction : E}', () => {
        utils.executeCommand('RIGHT', simulator);
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('E');
    });

    it('executeCommand(REPORT) should return the report', () => {
        const report = utils.executeCommand('REPORT', simulator);
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('N');
    });

    it('executeCommand(place(2,2,N)) should place the toy', () => {
        utils.executeCommand('place(2,2,N)', simulator);
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('N');
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