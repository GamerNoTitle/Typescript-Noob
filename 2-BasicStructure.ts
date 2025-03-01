////////// 变量声明 //////////

// 类型声明
let myname: string = "GamerNoTitle";    // 声明变量
let age: number = 114514;
const pi: number = 3.1415926;    // 声明常量
// 接口声明
interface Person {  // interface 接口名 {属性列表}，用于定义对象的类型，类似于 C 的 struct
    name: string;
    age: number;
}

////////// 函数声明 //////////
function greet(name: string): string {  // function 函数名(参数列表): 返回值类型 {函数体}
    console.log(`Hello, ${name}`);
    return `Hello, ${name}`;
}

const shortGreet = (name: string): string => {  // const 函数名 = (参数列表) => {函数体}
    console.log(`Hello, ${name}`);
    return `Hello, ${name}`;
}

////////// 类声明 //////////
class Person {  // class 类名 {属性列表，方法列表}，类似于 Python 的 class
    name: string;
    age: number;

    constructor(name: string, age: number) {  // constructor 构造函数，用于初始化对象，类似于 Python 的 __init__
        this.name = name;
        this.age = age;
    }

    greet(): void { // 定义一个函数，返回值为 void，类似于 Python 的 def，但是不需要用 function 关键字
        console.log(`Hello, ${this.name}`);
    }
}

////////// 接口与变量类型声明 //////////
interface Animal {  // interface 接口名 {属性列表，方法列表}，用于描述对象的属性/行为，可以集成和扩展
    name: string;
    sound: string;
    makeSound(): void;
}

type ID = string | number;  // 定义一个新的类型 ID，可以是 string 或 number

////////// 模块导入和导出 //////////
export class Person1 {  // export class 类名 {属性列表，方法列表}，用于导出类
    constructor(public name: string) {} // constructor 初始化对象函数，public 表示该属性为公有属性，可以在类外访问
}

import {Person1} from "./2-BasicStructure";  // import {类名} from "路径"（不带 .ts 后缀），用于导入模块

////////// 类型断言 //////////
let sentence: any = "Hello";    // any 表示任意类型
let length: number = (sentence as string).length;    // 类型断言，将 any 类型断言为 string 类型，然后获取其长度，有点像 (String)sentence 的用法

////////// 泛型 //////////
function identity<T>(arg: T): T {   // function 函数名<T>(参数列表): 返回值类型 {函数体}，T 为泛型，表示任意类型，用于占位，让用户在使用的时候传入具体的类型
    return arg;
}

////////// 注释 //////////

// 单行注释

/*
    多行注释
*/

////////// 类型推断 /////////
let x = 10; // TypeScript 会自动推断 x 为 number 类型
let word = "Hello"; // TypeScript 会自动推断 word 为 string 类型

////////// 类型守卫 /////////
// TypeScript 提供了类型守卫（如 typeof 和 instanceof），用于在运行时缩小变量的类型范围。
// 使用关键词 typeof, instanceof 来判断变量的类型范围
function isString(value: any): value is string {    // function 函数名(参数列表): 返回值类型 {函数体}，value is string 表示返回值为 boolean 类型，value 会被当成 string 类型处理
    // 类型守卫进行类型收窄，在调用的时候就可以使用 string 类型的方法
    return typeof value === 'string';
}

function processString(value: any): void {
    if (isString(value)) {
        console.log(value.toUpperCase());   // 如果上面 isString 把 value is string 换成 boolean，这里就会提示 any 不存在 toUpperCase 方法
    } else {
        console.log('Not a string');
    }
}

////////// 异步编程 //////////

/* 关于 Promise
核心思想：Promise 就像一个 “期货” 或 “未来值”
想象一下你去餐厅点餐：
- 你点餐 (发起异步操作): 你向服务员 (系统) 发出一个请求 (比如网络请求、文件读取)。
- 服务员给你一个号码牌 (Promise): 这个号码牌不是实际的食物，而是一个 承诺：食物做好了会给你。 Promise 就是代表未来结果的对象。现在结果还没出来，但你知道最终会有一个结果 (成功拿到食物，或者食物做失败了)。
- 等待食物做好 (处理 Promise): 你可以拿着号码牌做其他事情 (程序继续运行)。 当食物做好了 (异步操作完成)，服务员会叫号 (Promise 状态改变)。
- 拿到食物或被告知没菜了 (Promise 的结果): 要么你拿到美味的食物 (Promise 成功 resolve 并返回结果值)，要么服务员告诉你今天没这道菜了 (Promise 失败 reject 并返回错误信息)。
*/

async function fetchData(url: string): Promise<string> {   // async function 函数名(参数列表): 返回值类型 {函数体}，返回值类型为 Promise<string>
    // 表示返回一个 Promise 对象，Promise 对象的值为 string 类型
    // Promise 对象是异步编程的一种解决方案，用于处理异步操作的结果
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

////////// 错误处理 //////////
try {
    throw new Error("This is an error.");   // throw new Error("错误信息")，抛出一个 Error 类型的错误
} catch (error) {
    if (error instanceof Error) {   // 判断 error 是否为 Error 类型
        console.log(error.message);
    } else {
        console.log("An unknown error occurred.");
    }
}