/*
El Reto: Dadas dos cadenas de texto s y t,
 escribe una función en TypeScript que devuelva true si t es un anagrama de s, 
 y false en caso contrario. 
 Un anagrama es una palabra formada al reordenar 
 las letras de otra palabra diferente usando todas las letras originales 
 exactamente una vez (por ejemplo, roma y amor).



*Ejemplo de entrada:

const s = "anagrama";
const t = "nagaramas"; //! Falso, tiene una 's' extra


*/


function isAnagram(s: string, t: string): boolean{

    //Si no miden lo mismo no pueden ser anagramas
    if(s.length != t.length){
        return false;
    }

    // Inicializamos nuestro Hash Map. 
    // La clave es la letra (string) y el valor es su frecuencia (number).
    const cuentaCaracteres = new Map<string, number>();

    //Paso 1: Contar los caracteres de la primera cadena 's'
    for(let i=0; i< s.length ; i++){
        const letra = s[i];
        //Si ya existe la letra, le sumamos 1 al valor de la key, si no, empezamos en 0
        const cantidadActual = cuentaCaracteres.get(letra) || 0;
        cuentaCaracteres.set(letra, cantidadActual + 1);
    }

    //Paso 2: Restar los caracteres usando la segunda cadena 't'
    for(let i = 0; i < t.length; i++){
        const letra = t[i];

        //Si la letra ni se registró en 's', o ya la gastamos (es 0)
        if(!cuentaCaracteres.has(letra) || cuentaCaracteres.get(letra) === 0){
            return false;
        }

        //Restamos uno a la cuenta porque ya emparejamos la letra
        const cantidadActual = cuentaCaracteres.get(letra)!;
        cuentaCaracteres.set(letra, cantidadActual - 1);
    }

    return true;
    
}