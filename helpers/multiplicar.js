const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {                
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) { 
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.red} ${i} = ${base * i}\n`;
        }

        if(listar){
            console.log(colors.brightBlue('==================')) 
            console.log(colors.brightCyan(`Tabla del: ${base}`))
            console.log(colors.brightBlue('=================='))            
            console.log(colors.brightCyan(consola))

            
        }        

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);            
        return `tabla-${base}.txt creada`;

    } catch (error) {
        throw error
    }
    

    
}

module.exports = {
    crearArchivo
}