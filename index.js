import { NapiIdojaras } from "./napiidojaras.js";
import { maiidojaras } from "./idojaraskezeles.js";

const ujidojaras1 = new NapiIdojaras(0, 15, 8, "felhős")

console.log(ujidojaras1)

const mai = await maiidojaras()