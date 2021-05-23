//Seleccionamos el input donde seleccionaremos el archivo
const archivoTexto = document.querySelector('#archivoTexto');

document.addEventListener('DOMContentLoaded', function() {
    archivoTexto.addEventListener('change', abrirArchivo);

});

async function abrirArchivo(evento) {
    //archivo seleccionado
    let archivo = evento.target.files[0];
    console.log(archivo);
    //Aqui terminara el arry de objects de la lectura
    let dataArray = [];
    //aqui terminara el string que contentra la informacion tipo .CSV si esque es un.json el archivo cargado
    let dataContenido = "";
    //comprobamos si se selecciono un archivo
    if (archivo) {
        console.log(`-------------------------------------`);
        //obtenemos el nombre del archivo que seleccionamos
        const nombreArchivo = archivo.name;

        console.log(nombreArchivo);
        console.log(`-------------------------------------`);
        //hacemos split . para que nos separe la extension de nombre del archivo
        const extensionArchivo = nombreArchivo.split(".");
        /* console.log(extensionArchivo[1]); */
        //si la extension es .json 
        if (extensionArchivo[1] == "json") {
            //los archivos que querramos leerlos deben estar dentro de folder o dar otra direccion por defecto
            const resultado = await fetch(`./folder/${nombreArchivo}`);
            //lo leemos directo como json
            const db = await resultado.json();
            /*  console.log(db); */
            //se realiza destruction segun que tiene el archivo Json
            const { servicios } = db;
            //agregamos las propiedades que contenga el json original
            dataContenido += "id,nombre,precio\r\n";
            //sirve para recuperar cada valor del array
            servicios.forEach(servicio => {
                //aplicamos destruction para recuperar los values
                const { id, nombre, precio } = servicio
                //agregamos los values al string que se mostrara en html
                dataContenido += `${id},${nombre},${precio}\r\n`;
            });
            dataArray = servicios;
            //mostramos la tabla en el textarea
            document.querySelector('#contenido').innerHTML = dataContenido;
        } else {
            //los archivos que querramos leerlos deben estar dentro de folder o dar otra direccion por defecto
            const resultado = await fetch(`./folder/${nombreArchivo}`);
            //lo leemos como texto
            const db = await resultado.text();
            /* console.log(db);
            console.log(db.split('\r\n')); */
            //mostramos en texto plano las values del archivo
            document.querySelector('#contenido').innerHTML = db;
            //leemos las lineas separando el contenido del archivo por \n salto de linea y \r que es reinicio de linea para que la siguiente linea comience desde la izquierda
            var lines = db.split('\r\n');
            //leemos el encabezado para que podamos agregarlos como propiedad a cada dato
            var headers = lines[0].split(',');
            //llenamos nuestro array
            for (var i = 1; i < lines.length; i++) {
                //comenzamos con lines [1] para que no lea los headers
                var rowData = lines[i].split(',');
                //llenamos el array final desde 0 
                dataArray[i - 1] = {};
                //aqui juntamos su propiedad (header) con su valor (rowData)
                for (var j = 0; j < rowData.length; j++) {
                    /* console.log(`${headers[j]}:${rowData[j]}`); */
                    dataArray[i - 1][headers[j]] = rowData[j];
                }
            }
        }
    } else {
        document.querySelector('#mensajes').innerHTML = "No se ha seleccionado un archivo";
    }
    console.log(dataArray);
    console.table(dataArray);

}