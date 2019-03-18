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

// 枚举
// enum Color {
//     Red = 2,
//     Green =1,
//     Blue =4
// }
//
// console.log(Color.Red,Color.Blue);
//
// let color: Color = Color.Green;
// console.log(color);


// any
// let x: any = 123;


// void  表示没有任何类型  通常与any相反  当一个函数没有返回值的时候 通常会用到其返回值是void
// 声明一个void类型的变量通常没什么用， 因为只能是undefined或者null
// function test():void {
//     console.log(x)
// }
// test();
// null 和undefined 通常声明这两个类型没啥用  默认情况下  这两种类型是所有的类型的子类型
// let u: undefined = undefined;
// let n: null = null;
//
// console.log(u, n);
// never 表示那些永远不存的类型 例如 never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或者箭头函数表达式的返回类型
// 变量也可能是never类型 当他们被永不为真的类型保护所约束时

// function error(message: string): never {
//     throw new Error(message)
// }
//
// function fail() {
//     return error("something failed")
// }
//
// function infiniteLoop(): never {
//     while (true){
//
//     }
// }

// console.log(fail(), infiniteLoop());

// Object 表示非原始类型 也就是除number, string, undefined, null, boolean, symbol之外的类型

// 使用object类型，就可以更好地表示像Object.create这样的API

// declare function create(o: object | null):void;
//
// create({prop:0});
// create(null);

// 类型断言

// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。
// 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;

// let someValue: any = " this is a string";
//
// let strLength: number = (someValue as string).length;
//
//
// function f() {
//     var a = 1;
//     return a;
//     function f1() {
//         a++
//     }
// }
// console.log(f());

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);


interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

console.log(mySquare);

interface Peo {
    name?: string;
    age?: number;
}

function getPeo(peop: Peo): {name: string; grade: number} {
    let newPeo = {name: 'haha',grade:123}
    if (peop.name){
        newPeo.name = peop.name
    }
    if (peop.age) {
        newPeo.grade = peop.age -6
    }
    return newPeo
}

let lei = getPeo({age: 12});
console.log(lei);

interface only {
    readonly name?: string;
    readonly age?: number
}

let p1: only = {name:'123',age:123};