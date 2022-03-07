//function

function getName(): string {
  return "my name is Arfian";
}

function printName(): void {
  console.info(getName());
}

console.info(getName());
printName();

//function argument
function plus(val1: number, val2: number): number {
  return val1 + val2;
}

console.info(plus(99, 1));

//function as type
type Age = number;
let age: Age = 12;

type Tambah = (val1: number, val2: number) => number;

const add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};
console.info(add(99, 1));

//default parameter
const fullName = (first: string, last: string = "<kosong>"): string => {
  return `${first} ${last}`;
};

console.info(fullName("Hendra"));

//optional parameter
const getName2 = (val1: string, val2?: string): string => {
  //val2 optional, apabila kosong maka undifined
  return `${val1} ${val2}`;
};
console.info(getName2("rudi"));
