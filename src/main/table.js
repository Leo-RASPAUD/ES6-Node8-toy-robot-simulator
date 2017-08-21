class Table {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get maxPositionY() {
        return this.height - 1;
    }

    get maxPositionX() {
        return this.width - 1;
    }

}

export default Table;