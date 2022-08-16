// 01

// const Ten: number = 10

// console.warn(Ten)

let num: number = 12;
let str: string = "abc";

let isTrue: boolean = false;

function add(n1: number, n2: number) {
    return n1 + n2;
}

const result = add(10, 20);
console.warn(result);

// type infrence

let data = 32;

// data='tehu' ==> it return error

const val = 10;

let mynum: 5;

//object type

type objectType = { name: string, age: number, email: string }

const person: objectType = {
    name: "cicero",
    age: 20,
    email: 'abc@test.com'

};

console.warn(person.name)


const User: objectType = {
    name: 'peater ',
    age: 29,
    email: 'peatetr@test.com'
}


