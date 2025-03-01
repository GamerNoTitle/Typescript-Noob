// 字符串类型
const myname = "GamerNoTitle";
let message: string = `Hello ${myname}!`;   // string 类型，但是用了反引号（`）包裹，可以使用模板字符串
console.log(message);   // 输出：Hello GamerNoTitle!

// 数字类型（表示所有数字，不分整数和浮点数）
let number: number = 114514;    // number 类型
let pi: number = 3.1415926;

// 布尔类型
let isTypeScript: boolean = true;   // boolean 类型

// 数组
let numbers: number[] = [1, 2];    // 数字数组，与 C 类似，只不过这里的中括号在类型后面，而不是放在变量名后面
let users: string[] = ["GamerNoTitle", "Luminoria"];    // 字符串数组
let anys: any[] = [1, "GamerNoTitle", true];    // any 类型数组，表示任意类型，什么都能塞

// 元组
let x: [string, number] = ["GamerNoTitle", 114514];    // 元组，表示一个已知元素数量和类型的数组，各元素的类型不必相同，与 Python 不同的是，这里的 tuple 可变
let y: [string, number][] = [["GamerNoTitle", 114514], ["Luminoria", 1919810]];    // 元组数组，前面是元组类型，后面接个括号表示数组

// 枚举
enum Identity {   // enum 枚举名 {枚举列表 或者 键名=值 的列表}，用于定义一组命名的常量，类似于 C 的 enum，后面是没有等号的
    Student = "Student",
    Teacher = "Teacher",
    Admin = "Admin"
}
let myIdentity: Identity = Identity.Admin;

// Any 类型
// 表示任意类型，适合不确定数据类型的情况，但是会绕过类型检查
let unknownValue: any = 1;
unknownValue = "GamerNoTitle";
unknownValue = true;
// 以上操作均合法，因为 unknownValue 是 any 类型，所以可以直接进行赋值操作，但是要注意使用成员函数的时候的变量类型
unknownValue = "GamerNoTitle";
unknownValue.toUpperCase();    // 这里是正确的，此时为 string 类型，此类型有 toUpperCase 方法
unknownValue.tofixed();    // 这里是错误的，string 类型没有 tofixed 方法

unknownValue = 3.1415926;
unknownValue.tofixed(3);    // 这里是正确的，number 类型有 tofixed 方法
unknownValue.toUpperCase();    // 这里是错误的，number 类型没有 toUpperCase 方法

// 也可以用 any 类型来定义数组
let anyArray: any[] = [1, "GamerNoTitle", true, Identity.Admin];
anyArray[0] = "Luminoria";  // 也可以直接进行数组元素的赋值

// void 类型
// 表示没有任何类型，一般用于函数的返回值
function saySomething(something: string): void {    // 此函数没有返回值
    console.log(something);
}

// null 和 undefined
// null 和 undefined 分别表示"空值"和"未定义"。在默认情况下，它们是所有类型的子类型，但可以通过设置 strictNullChecks 严格检查。
let empty: null = null;    // null 可以是个类型，也可以是个值
let undefinedValue: undefined = undefined;  // 表示未定义的一个值，也可以是个类型

typeof (null);    // 输出：object
typeof (undefined);    // 输出：undefined

// 但是如果设置了 --strictNullChecks，null 和 undefined 就只能赋值给自己和 void 类型
let b: null = null;
let c: undefined = undefined;
let d: number = null;   // 错误的，开了 --strickNullChecks 会编译报错 Type 'null' is not assignable to type 'number'.
// 可以对一个变量指定多个类型，用 | 分隔
let unionTypeVar: number | null | undefined | string;
unionTypeVar = 1;
unionTypeVar = null;
unionTypeVar = undefined;
unionTypeVar = "GamerNoTitle";
// 以上操作都是合法的
// 对于 null 和 undefined 赋值给 void
// 可以把 undefined 看做 Python 中 None 的作用
function undefinedReturn(): void {
    return undefined;    // 此时进行了把 undefined 赋值给函数的返回值（void 类型）
}

function undefinedReturn1(): void {
    console.log("This is a no return function");    // 这里没有显式的 return 语句，返回的值为 undefined，同样进行了赋值给 void 类型
}

function nullReturn(): void {
    return null;    // 同样进行了把 null 赋值给函数的返回值（void 类型），但是严格的检查下会报错 Type 'null' is not assignable to type 'void'.
}

// never 类型
// never 是其他类型的子类型，代表从不会出现的值，一般用于抛出异常或无限循环
// never 类型可以赋值给任何类型，但是没有类型可以赋值给 never 类型
let neverVar: never;
let notNeverNumber: number;

// neverVar = (() => { throw new Error("This is an error"); })();    // never 类型可以赋值给 never 类型（这里说的都是类型），因为这个函数永远不会返回
// notNeverNumber = (() => {throw new Error("This is an error."); })();    // never 类型可以赋值给其他类型

function throwError(message: string): never {    // 返回值为 never 类型，报错不会返回
    throw new Error(message);
}

// function infiniteLoop(): never {    // 返回值为 never 类型，永远不会返回
//     while (true) {
//         // do something
//     }
// }

// object 类型
let person: object = {
    name: "GamerNoTitle",
    age: 18
};    // object 类型，非原始类型，这里的 person 是一个对象，含有 name 和 age 两个属性，可以看做 dict
// object 与 interface 不同，object 可以看做 dict
// interface 里面可以有属性和方法，但不涉及方法的实现
// class 可以继承 interface 的定义，使用 class <class_name> inplements <interface_name> 来实现对接口的继承，然后在里面实现 interface 中定义的方法

let dogObject: object = {
    name: "dog",
    sound: "bark",
    makeSound: function () { console.log(this.sound) }
}
let dogObjectName: string = dogObject.name;
let dogObjectSound: string = dogObject.sound;
dogObject.makeSound();
// 但是这里很明显 IDE 会报错，因为 dogObject 是 object 类型，没有 makeSound 方法，所以这里会报错，编译也会报错，但是能跑
// 他认为 dogObject 没有 makeSound 方法，但是我们明明在 dogObject 中定义了 makeSound 方法，不过 IDE 可不会看到这个，为了解决这个问题，应该使用 interface
// 注：interface 和 class 并不属于基本类型

interface Animal {
    name: string;
    sound: string;
    makeSound(): void;
}

class Dog implements Animal {
    name = "dog";
    sound = "bark";

    constructor() { }

    makeSound() {
        console.log(this.sound);
    }

}

let dog: Animal = new Dog();
console.log(dog.name);
console.log(dog.sound);
dog.makeSound();

// 联合类型
// 使用竖线 | 来分割多个类型，表示某个变量可以是这些类型中的任意一个
let unionVar: string | number;
unionVar = "GamerNoTitle";
unionVar = 114514;
// 以上操作均合法，因为都在定义的变量类型范围内
unionVar = true;
// 不合法，因为 unionVar 没有 boolean 类型

// unknown 类型
// 未知类型，与 any 类型相似，但是 unknown 类型只能赋值给 any 类型和 unknown 类型
let u: unknown = 1;
let uu: number = u;    // 这里会报错，因为 unknown 类型不能直接赋值给其他类型
// 必须经过类型检查才可以赋值
if (typeof u === 'number') {
    let uuu: number = u;    // 这里是合法的，因为 u 是 number 类型
}

let unknownVar: unknown = 'Hello World';
if (typeof unknownVar === 'string') {   // 进行类型检查
    let unknownToString: string = unknownVar;    // 这里是合法的，因为 unknownVar 是 string 类型
}

// 类型断言
// 作用是告诉 IDE 和编译器这个变量的类型是什么，但是不进行强制类型转换
let numberVar: number = 114514;
let numberLength: string = (numberVar as string).length.toString();    // 这里告诉 IDE 和编译器 numberVar 是 string 类型，将 numberVar 当成 string 来看待
// IDE提示 Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. 
// If this was intentional, convert the expression to 'unknown' first
// 它认为你可能没有真正理解类型转换的含义，或者你的做法不是你真正想要做的
// 所以它建议你先转换为 unknown 类型，再转换为 string 类型
let numberLength1: string = (numberVar as unknown as string).length.toString();    // 这里是合法的
// 但是这里仍然会出问题，Cannot read properties of undefined (reading 'toString')
// 因为 numberVar 是 number 类型，没有 length 方法（提示 undefiend），所以这里会报错
// 所以在进行类型断言的时候，要确保类型是正确的，否则会报错
// 当然，这里可以使用 String() 函数来进行类型转换
let numberLength2: string = String(numberVar).length.toString();    // 这里是合法的
console.log(numberLength2); // 输出 6

// *类型转换
let numberVar: number = 123;
let stringVar: string = "456";
let booleanVar: boolean = true;

// 运行时转换为字符串
let numToStr: string = String(numberVar);   // "123"
let boolToStr: string = booleanVar.toString(); // "true"
let numToStr2: string = `${numberVar}`;      // "123" (模板字面量)

// 运行时转换为数字
let strToNum: number = Number(stringVar);   // 456
let strToInt: number = parseInt("10px", 10); // 10 (解析整数，忽略非数字部分)
let strToFloat: number = parseFloat("3.14"); // 3.14
let strToNum2: number = +stringVar;         // 456 (一元加号)

// 运行时转换为布尔值
let numToBool: boolean = Boolean(numberVar); // true (非 0 数字是 truthy)
let emptyStrToBool: boolean = Boolean("");    // false (空字符串是 falsy)
let objToBool: boolean = Boolean({});       // true (对象是 truthy)

console.log(numToStr, boolToStr, numToStr2);
console.log(strToNum, strToInt, strToFloat, strToNum2);
console.log(numToBool, emptyStrToBool, objToBool);

// 字面量类型
// 可以让变量只能够拥有特定的值
let identityLiteral: "Student" | "Teacher" | "Admin";
identityLiteral = "Student";
identityLiteral = "Teacher";
identityLiteral = "Admin";
identityLiteral = "GamerNoTitle";    // 这里会报错，因为 identityLiteral 只能是 "Student" | "Teacher" | "Admin" 中的一个

let oneToFour: 1 | 2 | 3 | 4;
oneToFour = 1;
oneToFour = 2;
oneToFour = 3;
oneToFour = 4;
oneToFour = 5;    // 这里会报错，因为 oneToFour 只能是 1 | 2 | 3 | 4 中的一个


////////// 下面是 Runoob 提供的一个例子 //////////
// 定义枚举类型，用于表示用户的角色
enum Role {
    Admin,
    User,
    Guest,
}

// 使用 interface 定义用户的结构
interface User {
    id: number;               // number 类型，用于唯一标识用户
    username: string;         // string 类型，表示用户名
    isActive: boolean;        // boolean 类型，表示用户是否激活
    role: Role;               // enum 类型，用于表示用户角色
    hobbies: string[];        // array 类型，存储用户的兴趣爱好
    contactInfo: [string, number]; // tuple 类型，包含电话号码的元组，格式为：[区域码, 电话号码]
}

// 创建用户对象，符合 User 接口的结构
const user: User = {
    id: 1,
    username: "Alice",
    isActive: true,
    role: Role.User,
    hobbies: ["Reading", "Gaming"],
    contactInfo: ["+1", 123456789],
};

// 定义一个返回字符串的函数来获取用户信息
function getUserInfo(user: User): string {
    return `User ${user.username} is ${user.isActive ? "active" : "inactive"} with role ${Role[user.role]}`;
}

// 使用 void 类型定义一个函数，专门打印用户信息
function printUserInfo(user: User): void {
    console.log(getUserInfo(user));
}

// 定义一个 union 类型的函数参数，接受用户 ID（number）或用户名（string）
function findUser(query: number | string): User | undefined {
    // 使用 typeof 来判断 query 的类型
    if (typeof query === "number") {
        // 如果是数字，则根据 ID 查找用户
        return query === user.id ? user : undefined;
    } else if (typeof query === "string") {
        // 如果是字符串，则根据用户名查找用户
        return query === user.username ? user : undefined;
    }
    return undefined;
}

// 定义一个 never 类型的函数，用于处理程序的异常情况
function throwError(message: string): never {
    throw new Error(message);
}

// 使用 any 类型处理未知类型的数据
let unknownData: any = "This is a string";
unknownData = 42; // 重新赋值为数字，类型为 any

// 使用 unknown 类型处理不确定的数据，更加安全
let someData: unknown = "Possible data";
if (typeof someData === "string") {
    console.log(`Length of data: ${(someData as string).length}`);
}

// 调用各个函数并测试
printUserInfo(user);                    // 打印用户信息
console.log(findUser(1));               // 根据 ID 查找用户
console.log(findUser("Alice"));         // 根据用户名查找用户

// 使用 null 和 undefined 类型的变量
let emptyValue: null = null;
let uninitializedValue: undefined = undefined;