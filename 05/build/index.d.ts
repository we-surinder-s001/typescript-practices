declare let func: (name: string) => string;
declare const func2: (name: string) => string;
declare const arr: number[];
declare const arrString: string[];
declare const unionVariable: string | number | undefined;
declare const arrUnion: number[] | string[];
declare const arrUnion2: number[] | string[];
declare const arrUnion3: (number | string)[];
type Fruit = {
    name: string;
    color: string;
    allSeason: boolean;
};
declare const apple: Fruit;
type Carrot = Fruit & {
    price: number;
};
declare const carrot: Carrot;
interface Fruits {
    name: string;
    color: string;
    allSeason: boolean;
}
declare const banana: Fruits;
interface Fruits {
    price: number;
}
declare const orange: Fruits;
interface Mango extends Fruits {
    season: string;
}
declare const mango: Mango;
interface Shirt {
    name: string;
    color: string;
}
declare const shirt: Shirt;
interface Shirt {
    isAllowedInOffice?: boolean | null | undefined;
}
declare const shirt2: Shirt;
declare const func3: (clothAllowed: boolean) => void;
declare class Person {
    name: string;
    protected age: number;
    readonly gender: string;
    constructor(name: string, age: number, gender: string);
    get_gender(): string;
    get Gender(): string;
}
declare class Student extends Person {
    get_age(): number;
    get Age(): number;
    set_age(age: number): void;
    set Age(age: number);
}
declare const surinder: Person;
declare const student_surinder: Student;
