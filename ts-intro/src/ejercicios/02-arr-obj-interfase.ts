/*
    ===== Código de TypeScript =====
*/

let habiliadades:  string [] = ['Bash','Counter','Healing'] ;
 
interface Personaje {

    nombre: string,
    hp:number,
    habilidades : string[],
    puebloNatal? : string;

}

const personaje:Personaje = {

    nombre: 'Strider',
    hp: 100,
    habilidades:['Bash','Counter','Healing']

}

//habiliadades.push(1);
personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);