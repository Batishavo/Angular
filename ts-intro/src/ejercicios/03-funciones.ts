/*
    ===== Código de TypeScript =====
*/

function sumar(a : number,b :number): number{
    
    return a + b;

}

const sumarFlecha = (a,b):number=>{

    return a + b;

}

function multiplicar(numero: number,otroNumero?: number,base: number = 2  ):number{
    
    return numero = base;

}


/*const resultatado = multiplicar(5,0,10);

//const resultatado = sumar(10,20);

console.log(resultatado);*/

interface PersonajeLor{

    nombre:string,
    pv    :number;

    mostrarHp:()=>void;

}

function curar(personaje: PersonajeLor, curarX:number): void{

    personaje.pv += curarX;

    console.log(personaje);

    return undefined;

}

const nuevoPersonaje: PersonajeLor ={

    nombre: "STrider",
    pv   : 50,
    
    mostrarHp (){

        console.log('Puntos de vida', this.pv);
    
    }

}

curar(nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();

