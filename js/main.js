'use strict'

{

    const createColum = (col) => {

        const source = [];
        for (let i = 0; i < 15; i++) {
            source[i] = i + 1 + 15 * col;
        }

        //Math.floor(Math.random() * source.length)
        const column = [];
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }

        return column;
    }

    const columns = [];
    columns[0] = createColum(0);
    columns[1] = createColum(1);
    columns[2] = createColum(2);
    columns[3] = createColum(3);
    columns[4] = createColum(4);
    columns[2][2] = 'Free';

    // console.table(columns);

    const bingo = [];
    for (let row = 0; row < 5; row ++) {
        bingo[row] = [];
        for (let col = 0; col < 5; col++) {
            bingo[row][col] = columns[col][row];
        }
    }

    console.table(bingo);
}