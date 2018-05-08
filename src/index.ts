import chalk from 'chalk';
import { spongeMock } from 'spongeMock';

function greet(name : string){
    let outString:string;
    outString = "Hello "+name;

    console.log(spongeMock(outString.toString()));
}

greet("Shakir");