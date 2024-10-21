let message: string = "Hello, Typescript";
message += " !!!";
console.log(message);

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

let tuple: [number, string] = [0, '11'];

/* ----------- Objects ------------ */

let center: { x: number, y: number } = {
    x: 0,
    y: 0,
}

// or   

type Point = { x: number, y: number };

let unit: Point = { x: 0, y: 0 }

/* ----------- functions ------------ */

function add(a: number, b: number): number {
    return a + b;
}

function sum(...values: number[]): void {
    console.log(values.length);
}

/* ----------- structural typing ------------ */

type User = { id: string }
type Product = { id: string }

let user: User = { id: 'user-adad23213' }
let product: Product = { id: 'product-adad23213' }

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

function load():unknown{
    return "Hello, World";
}

let hello = load();

// warning / Error ----- const trimmed = hello.trim(); 

const trimmed = (hello as string).trim();
// or
const trimmed1 = (<string>hello).trim();


/* -----------  env declaration  ------------ */

console.log('Logged in user:', process.env.USER);
/* 
use :
    -- declare const process :any;

    or 

    -- npm i @types/node 

    // -- npm publish
*/