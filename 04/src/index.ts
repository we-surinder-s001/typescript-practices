// how can we define the type of a function:

let func: (name: string) => string

func = (name) => {
    return name;
}
console.log(func("surinder Singh"));

// also we can define the type of a function:

const func2 = (name: string): string => {
    return name;
}

console.log(func2("surinder Singh"));

// how we can define the type of a array:

const arr: number[] = [1, 2, 3, 4, 5];
const arrString: string[] = ["a", "b", "c"];


// unions:
const unionVariable: string | number | undefined = "surinder";

// array that can accept only number or string at a time:
const arrUnion: number[] | string[] = [1, 3, 3];
const arrUnion2: number[] | string[] = ["sdf", "sfds", "dsfd"];


// how can we define array union:
const arrUnion3: (number | string)[] = [1, "2", 3, "red", 5];

// alias and interface:

// alias:

type Fruit = {
    name: string,
    color: string,
    allSeason: boolean
}

const apple: Fruit = {
    name: "apple",
    color: "red",
    allSeason: true
}

type Carrot = Fruit & {
    price: number
}

const carrot: Carrot = {
    name: "carrot",
    color: "red",
    allSeason: true,
    price: 50
}

// interface:

interface Fruits {
    name: string,
    color: string,
    allSeason: boolean
}


const banana: Fruits = {
    name: "banana",
    color: "yellow",
    allSeason: true,
    price: 50
}

interface Fruits {
    price: number
}


const orange: Fruits = {
    name: "orange",
    color: "orange",
    allSeason: false,
    price: 50
}

interface Mango extends Fruits {
    season: string
}

const mango: Mango = {
    name: "mango",
    color: "yellow",
    allSeason: true,
    price: 50,
    season: "summer"
}

console.log(mango);

// optional perameter:

interface Shirt {
    name: string,
    color: string,
}

const shirt: Shirt = {
    name: "formal",
    color: "blue"
}

interface Shirt {
    isAllowedInOffice?: boolean | null | undefined //this is optional perameter represented by '?'
}

const shirt2: Shirt = {
    name: "formal",
    color: "blue",
    isAllowedInOffice: true
}

console.log(shirt, shirt2)

// if i wanted to provide option perameter to a function as an argument:

const func3 = (clothAllowed: boolean,): void => {
    console.log(clothAllowed)
}

// this is going to throw typescript an error:

// func3(shirt2.isAllowedInOffice);
// so we can overcome that with '!'
func3(shirt.isAllowedInOffice!);
