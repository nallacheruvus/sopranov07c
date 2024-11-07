let arr = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];
let set = new Set();
for (const i of arr) {
    set.add(i);
}
const dline = () => { console.log("*".repeat(50)) }
console.log(`Original size of array is ${arr.length}`);
// console.log(set);
dline();
let arr2 = ["satish", "satish", "satish", "satish", "gokul", "gokul", "jeevan", "john", "john"];
let seta = new Set(arr2);
// console.log(seta);
for (const i of set) {
    console.log(i);
}
dline();
for (const i of seta) {
    console.log(i);
}
dline();
Array.from(set).forEach(n => console.log(n));
dline();
Array.from(seta).forEach(n => console.log(n));
dline();
let arr3 = [true, true, true, true, true, true, false, false, false];
let set3 = new Set(arr3);
dline();
Array.from(set3).forEach(n => console.log(n));
let arr4 = [1.1, 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.5, 1.5];
let set4 = new Set(arr4);
dline();
Array.from(set4).map(n => console.log(n));
dline();
const mycoll = Array.from(set4);
for (const i of mycoll) {
    console.log(i);
}
dline();
for (const k in mycoll) {
    console.log(mycoll[k]);
}
dline();
mycoll.forEach(n => console.log(n));
dline();
console.log(mycoll.join(","));





