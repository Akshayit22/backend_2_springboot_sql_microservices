console.log('Logged in user:', process.env.USER);

/*   -----------  ReadOnly ------------------  */

type Points = {
    readonly x: number,
    readonly y: number
}

// public readonly name : string;

/*   ----------------  Union ------------------  */

let input: string | string[] | boolean;
input = ['a', 'b']

/*   ----------------  Literal ------------------  */
// accepts only given literals

let direction: 'North' | 'South' | 'West';
direction = 'South';

type Dicevalue = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1) as Dicevalue;
}
console.log(rollDice() + " " + rollDice() + ' ' + rollDice());

/*   ----------------  Type Norrowing ------------------  */

if (typeof input === 'string') {
    console.log('input is of type string');
}

// in classes

// if( animal instanceof Cat){}
// else ( animal instanceof dog){}

// if ('x' in obj){}

// if ( obj.kind === 'some types'){}

/*  ------------------ undefined vs null  ------------------  */

//   undefined == null  ==> true

// non null assertions ===> !
// if( points!.x){}

/*   ----------------  Intersection (&) ------------------  */

type point2d = {
    x: number,
    y: number
}

type point3d = point2d & {
    z: number
}

/*   ----------------  Optional (?) ------------------  */

type laptop = { name:string, gpu?:string}

/*   ----------------  Interface (like class)------------------  */

interface point2di {
    x: number,
    y: number
}

interface point3di extends point2d {
    z: number
}

// types better than interface
