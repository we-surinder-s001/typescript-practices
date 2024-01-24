"use strict";
// how can we define the type of a function:
let func;
func = (name) => {
    return name;
};
console.log(func("surinder Singh"));
// also we can define the type of a function:
const func2 = (name) => {
    return name;
};
console.log(func2("surinder Singh"));
// how we can define the type of a array:
const arr = [1, 2, 3, 4, 5];
const arrString = ["a", "b", "c"];
// unions:
const unionVariable = "surinder";
// array that can accept only number or string at a time:
const arrUnion = [1, 3, 3];
const arrUnion2 = ["sdf", "sfds", "dsfd"];
// how can we define array union:
const arrUnion3 = [1, "2", 3, "red", 5];
const apple = {
    name: "apple",
    color: "red",
    allSeason: true
};
const carrot = {
    name: "carrot",
    color: "red",
    allSeason: true,
    price: 50
};
const banana = {
    name: "banana",
    color: "yellow",
    allSeason: true,
    price: 50
};
const orange = {
    name: "orange",
    color: "orange",
    allSeason: false,
    price: 50
};
const mango = {
    name: "mango",
    color: "yellow",
    allSeason: true,
    price: 50,
    season: "summer"
};
console.log(mango);
const shirt = {
    name: "formal",
    color: "blue"
};
const shirt2 = {
    name: "formal",
    color: "blue",
    isAllowedInOffice: true
};
console.log(shirt, shirt2);
// if i wanted to provide option perameter to a function as an argument:
const func3 = (clothAllowed) => {
    console.log(clothAllowed);
};
// this is going to throw typescript an error:
// func3(shirt2.isAllowedInOffice);
// so we can overcome that with '!'
func3(shirt.isAllowedInOffice);
