let Cell = require("./Cell");

/*
[
    [0, 0, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
]



*/

class Game {

    constructor(width, height) {
        this.height = height;
        this.width = width;

        this.grid = this.initGrid(width, height);
    }

    countFriends(coords) {
        // find all friend cells
        // count live friends
        let xPos = coords[1];
        let yPos = coords[0];

        let friends = 0 - this.grid[yPos][xPos].getState();

        for (let i = yPos - 1; i <= yPos + 1; i++) {
            for (let j = xPos - 1; j <= xPos + 1; j++) {
                friends += this.grid[i][j].getState();
            }
        }
        return friends;
    }

    initGrid(width, height) {
        let grid = [];
        for (let i = 0; i< height; i++) {
           grid.push(this.createRow(width));
        }
        return grid;
    }

    createRow(width) {
        let row = [];
        for(let i = 0; i<width; i++) {
            let randomState = this.getRandomState();
            let cell = new Cell(randomState);
            row.push(cell);
        }
        return row;
    }

    getRandomState() {
        return Math.round(Math.random());
    }
    
};

let game = new Game(3,4);
console.log('grid \n:', game.grid);
console.log('cell 1, 1: \n', game.grid[0][1].getState());
console.log(game.countFriends([1,1]));

module.exports = Game;