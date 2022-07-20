/*
    ===== Código de TypeScript =====
*/
interface superHeroe{

    nombre    : string,
    edad      :number,
    direccion : Direcion,
    mostrarDireccion:()=>String;

}

interface Direcion {
    
    calle  : string,
    pais   : string,
    ciudad : string,

}
const superHeroe: superHeroe = {

    nombre: 'Spiederman',
    edad: 30,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){

        return this.nombre+','+
               this.direccion.ciudad+','+
               this.direccion.pais;        
    
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);