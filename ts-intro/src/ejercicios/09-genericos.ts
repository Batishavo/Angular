/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T){

    return argumento;

}

let soyString    = queTipoSoy('HOla Mundo'),
    soyNumero    = queTipoSoy(100),
    soyArreglo   = queTipoSoy([1,2,3,4,5,6,7,8,9,10]),
    soyExplicito = queTipoSoy<number>(100); 
