const dline = () => { console.log("*".repeat(50)); }
//#region 
/**
 * Map usage and syntax an illustration
 */
const map = new Map();
let arr1 = [122, 1112, 333, 1114, 53333];
let arr2 = ['Physics', 'Nuclear physics', 'Geo physics', 'Morphology', 'Petrology'];
for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], arr2[i]);
}
console.log(map);
dline();
/**
 * Example of an object mapping
 */
let arr3 = [{ id: 21, name: 'Mukesh' }, { id: 212, name: 'Muneer' }, { id: 33, name: 'Rafeeq' }, { id: 77, name: 'Roger' }, { id: 88, name: 'Grewal' }];
let objMap = new Map();
for (let i = 0; i < arr1.length; i++) {
    objMap.set(arr1[i], arr3[i]);
}
console.log(objMap);//1
dline();
const myVals = Array.from(objMap);//2
myVals.forEach(n => console.log(n[0] + " " + JSON.stringify(n[1])));
const myValsa = Array.from(objMap.entries());//3
dline();
myValsa.forEach(n => console.log(n[0] + " " + JSON.stringify(n[1])));
dline();
const myValsb = Array.from(objMap.keys());//4
for (const i of myValsb) {
    console.log(i + " " + JSON.stringify(objMap.get(i)));
}
dline();
myValsa.map(n => console.log(n[0] + " " + JSON.stringify(n[1])));//5
dline();
for (const i of myValsa) {
    console.log(i[0] + " " + JSON.stringify(i[1]));
}
dline();//6
Array.from(objMap.entries()).map(n => console.log(n[0] + " " + JSON.stringify(n[1])));
dline();
//7
Array.from(objMap.values()).map(n => console.log(n));
dline();//8
const aaar = Array.from(objMap.values());
for (const i of aaar) {
    console.log(i);
}
dline();
//9
const rr = Array.from(objMap.keys());
rr.forEach(n => console.log(n + " " + JSON.stringify(objMap.get(n))));
//10
dline();
rr.map(n => {
    console.log(`${n}\t ${objMap.get(n).id}\t${objMap.get(n).name}`);
});
//#endregion

//weakset,weakmap