//quesition 1
let myString: string = "Hello, TypeScript";
let myNumber: number = 25;
let myBoolean: boolean = true;
let myArray: number[] = [1, 2, 3, 4, 5];


// 2. Functions
function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(5, 10)); 
// 3. Interfaces
interface Person {
    name: string;
    age: number;
}function greet(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}
console.log(greet({ name: "John", age: 30 }));
