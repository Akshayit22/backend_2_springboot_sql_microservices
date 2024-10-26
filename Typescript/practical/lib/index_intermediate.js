"use strict";
console.log('Logged in user:', process.env.USER);
// public readonly name : string;
/*   ----------------  Union ------------------  */
let input;
input = ['a', 'b'];
/*   ----------------  Literal ------------------  */
// accepts only given literals
let direction;
direction = 'South';
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
console.log(rollDice() + " " + rollDice() + ' ' + rollDice());
/*   ----------------  Type Norrowing ------------------  */
if (typeof input === 'string') {
    console.log('input is of type string');
}
// types better than interface
