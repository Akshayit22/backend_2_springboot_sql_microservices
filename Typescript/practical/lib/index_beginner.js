"use strict";
let message = "Hello, Typescript";
message += " !!!";
console.log(message);
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
let tuple = [0, '11'];
/* ----------- Objects ------------ */
let center = {
    x: 0,
    y: 0,
};
let unit = { x: 0, y: 0 };
/* ----------- functions ------------ */
function add(a, b) {
    return a + b;
}
function sum(...values) {
    console.log(values.length);
}
let user = { id: 'user-adad23213' };
let product = { id: 'product-adad23213' };
// we can assign each others types because both have same structure
user = product;
product = user;
// -- extra information is OK, 2D point can be assigned to 3D point but not visa versa
/* ----------- extra types  ------------ */
/*
    Any
        - can bypass typescript code
        - we can anything from variable
        - ex. sample.any.thing.you.can.imagin();

    Unknown
        - safer
        - can not assess anything from anything
        - use unknown to avoid future errors

 */
/* ----------- type assertion  ------------ */
// to bypass compiler without type checks
function load() {
    return "Hello, World";
}
let hello = load();
// warning / Error ----- const trimmed = hello.trim(); 
const trimmed = hello.trim();
// or
const trimmed1 = hello.trim();
/* -----------  env declaration  ------------ */
console.log('Logged in user:', process.env.USER);
/*
use :
    -- declare const process :any;

    or

    -- npm i @types/node

    // -- npm publish
*/ 
