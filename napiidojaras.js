export class NapiIdojaras {
    constructor(nap, max, min, leiras){
        this.nap = nap;
        this.max = max;
        this.min = min;
        this.leiras = leiras;
    }    

    toString(){
        return `Az időjárás: ${this.nap}, max hőmérséklet ${this.max}, min hőmérséklet ${this.min}, egyéb infó: ${this.leiras}`
    }
}