export class NapiIdojaras {
    constructor(nap, max, min, leiras){
        this.nap = nap;
        this.max = parseInt(max);
        this.min = parseInt(min);
        this.leiras = leiras;
    }    

    toString(){
        return `Az időjárás: A hét ${this.nap}, max hőmérséklet ${this.max}, min hőmérséklet ${this.min}, egyéb infó: ${this.leiras}`
    }
}