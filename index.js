import { NapiIdojaras } from "./napiidojaras.js";
import { maiidojaras } from "./idojaraskezeles.js";
import { beolvas } from "./idojaraskezeles.js";

const ujidojaras1 = new NapiIdojaras(0, 15, 8, "felhős")

console.log(ujidojaras1)



const beolvasott =  beolvas()
console.log(beolvasott)

const mai = await maiidojaras()
console.log(mai)

beolvasott.push(mai)
console.log(beolvasott)

let legmelegebb = 0;
for(let i = 0; i < beolvasott.length; i++){
    if(beolvasott[i].max > beolvasott[legmelegebb].max){
        legmelegebb = i;}
}

console.log(`A legmelegebb nap ${legmelegebb}-on volt`)