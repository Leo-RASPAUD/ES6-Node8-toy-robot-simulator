import Simulator from '../main/simulator';
import Table from '../main/table';
import chai from 'chai';

const expect = chai.expect;

describe('Test simulator class', () => {

    let simulator;

    beforeEach(() => {
        const table = new Table(5, 5);
        simulator = new Simulator(table);
        simulator.place(2, 2, 'N');
    });

    it('Simulator should exist with all the functions', () => {
        expect(simulator).to.exist;
        expect(simulator.move).to.exist;
        expect(simulator.left).to.exist;
        expect(simulator.right).to.exist;
        expect(simulator.report).to.exist;
    });

    it('Place function should exist and have 3 parameters type {Number, Number, String}', () => {
        expect(simulator.place).to.exist;
        expect(() => simulator.place()).to.throw('Simulator.place() : Should take exactly 3 argument');
        expect(() => simulator.place(1, 'b')).to.throw('Simulator.place() : Should take exactly 3 argument');
        expect(() => simulator.place('a', 'b', 'c')).to.throw('Simulator.place() : Wrong argument type');
        expect(() => simulator.place(1, 2, 'N')).to.not.throw();
    });

    it('Simulator initial position should be {x: 2, y: 2, direction: \'N\'}', () => {
        const report = simulator.report();
        expect(report).to.exist;
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('N');
    });

    it('3 calls to move facing north should place the toy to {x: 2, y: 4, direction : \'N\'}', () => {
        simulator.move();
        simulator.move();
        simulator.move();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(4);
        expect(report.direction).to.equal('N');
    });

    it('3 calls to move facing north should place the toy to {x: 4, y: 2, direction : \'E\'}', () => {
        simulator.right();
        simulator.move();
        simulator.move();
        simulator.move();
        const report = simulator.report();
        expect(report.positionX).to.equal(4);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('E');
    });

    it('3 calls to move facing north should place the toy to {x: 2, y: 0, direction : \'S\'}', () => {
        simulator.right();
        simulator.right();
        simulator.move();
        simulator.move();
        simulator.move();
        simulator.move();
        simulator.move();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(0);
        expect(report.direction).to.equal('S');
    });

    it('3 calls to move facing north should place the toy to {x: 0, y: 2, direction : \'W\'}', () => {
        simulator.right();
        simulator.right();
        simulator.right();
        simulator.move();
        simulator.move();
        simulator.move();
        simulator.move();
        simulator.move();
        const report = simulator.report();
        expect(report.positionX).to.equal(0);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('W');
    });

    it('One call to move should place the toy to {x: 2, y: 3, direction : \'N\'}', () => {
        simulator.move();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(3);
        expect(report.direction).to.equal('N');
    });

    it('One call to left should place the toy to {x: 2, y: 2, direction : \'W\'}', () => {
        simulator.left();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('W');
    });

    it('2 calls to left should place the toy to {x: 2, y: 2, direction : \'S\'}', () => {
        simulator.left();
        simulator.left();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('S');
    });

    it('3 calls to left should place the toy to {x: 2, y: 2, direction : \'E\'}', () => {
        simulator.left();
        simulator.left();
        simulator.left();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('E');
    });

    it('4 calls to left should place the toy to {x: 2, y: 2, direction : \'N\'}', () => {
        simulator.left();
        simulator.left();
        simulator.left();
        simulator.left();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('N');
    });

    it('One call to set direction(S) should change the toy direction to {x:2, y:2, direction \'S\'}', () => {
        simulator.direction = 'S';
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('S');
    });

    it('One call to right should place the toy to {x: 2, y: 2, direction : \'E\'}', () => {
        simulator.right();
        const report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('E');
    });

    it('4 consecutives call to right or left should reset to the initial positition {x: 2, y: 2, direction: \'N\'}', () => {
        for (let i = 0; i < 4; i++) {
            simulator.right();
        }
        let report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('N');

        for (let i = 0; i < 4; i++) {
            simulator.right();
        }
        report = simulator.report();
        expect(report.positionX).to.equal(2);
        expect(report.positionY).to.equal(2);
        expect(report.direction).to.equal('N');
    });

});