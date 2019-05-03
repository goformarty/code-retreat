// 0 - dead
// 1 - alive

class Cell {
    constructor(state = 0) {
        this.state = state;
    }
    
    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }
}

module.exports = Cell;