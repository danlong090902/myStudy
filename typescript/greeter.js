// class Student {
//     fullName: string;
//
//     constructor(public firstName, public middleInital, public lastName) {
//         this.fullName = firstName + "" + middleInital + "" + lastName
//     }
// }
//
// interface Person {
//     firstName: string;
//     lastName: string;
// }
//
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + "" + person.lastName;
// }
//
// let user = new Student("Jane","M.","User");
//
// document.body.innerHTML = greeter(user);
//
//
// let name1:string = "meme";
//
// let age:number = 123;
//
// let say: string = `hello ,i'm  ${name1},i'm ${age} years old`;
// console.log(say);
// let arr: number[] = [1,2,3];
//
// let arr1: Array<number> = [1,2,3];
// 元组
// let arr2: [string,number] =["1",123];
// console.log(arr, arr1, arr2);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
function getPeo(peop) {
    var newPeo = { name: 'haha', grade: 123 };
    if (peop.name) {
        newPeo.name = peop.name;
    }
    if (peop.age) {
        newPeo.grade = peop.age - 6;
    }
    return newPeo;
}
var lei = getPeo({ age: 12 });
console.log(lei);
var p1 = { name: '123', age: 123 };
