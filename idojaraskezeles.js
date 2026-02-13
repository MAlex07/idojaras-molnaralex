import * as readline from 'node:readline/promises';
import { NapiIdojaras } from './napiidojaras.js';
import fs from 'node:fs';

export async function maiidojaras() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })


    const d = new Date();
    const mainmin = await rl.question('Adja meg mai minimum hőmérsékletet: ')    
    const maimax = await rl.question('Adja meg mai maximum hőmérsékletet: ')    
    const maileiras = await rl.question('Adjon egy rövid leírást a mai időjárásról: ')

    const maiIdojaras = new NapiIdojaras(d.getDay(), mainmin, maimax, maileiras)

    console.log(maiIdojaras)

    rl.close()    
}

export function beolvas(){
    const beolv = fs.readFileSync('idojaras.csv', 'utf-8')
    const sor = beolv.trim().split('\n')

    const lista = []

    for(let i = 0; i < sor.length; i++){
        const adat = sor[i].split(';')
        const idojaras = new NapiIdojaras(adat[0], adat[1], adat[2], adat[3])
        lista.push(idojaras)        
    }

    return lista
    
}