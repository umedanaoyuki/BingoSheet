'use strict'

{
    const source = [];
    for (let i = 0; i < 15; i++) {
        source[i] = i + 1;
    }

    //Math.floor(Math.random() * source.length)
    const b = [];
    for (let i = 0; i < 5; i++) {
        b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }

    console.log(b);
}