var estudiantes = `Materia,Estudiante,Calificacion
Frontend,Juan Pérez,5
Frontend,Carlos Pérez,9
Frontend,Jose Pérez,5
Backend,Juan Pérez,9
Backend,Carlos Pérez,8
Backend,Jose Pérez,9
Diseño,Juan Pérez,5
Diseño,Carlos Pérez,7
Diseño,Jose Pérez,3
DevOps,Juan Pérez,4
DevOps,Carlos Pérez,4
DevOps,Jose Pérez,4`
console.log(estudiantes.split('\n'));

var arrObj = [];
var lines = estudiantes.split('\n');
var headers = lines[0].split(',');

for (var i = 1; i < lines.length; i++) {
    var rowData = lines[i].split(',');
    arrObj[i] = {};
    for (var j = 0; j < rowData.length; j++) {
        /* console.log(`${headers[j]}:${rowData[j]}`); */
        arrObj[i][headers[j]] = rowData[j];
    }


}
console.log(arrObj);
console.table(arrObj);

//Creamos variables donde estan los estudiantes
const Estudiante1 = "Juan Pérez";
const Estudiante2 = "Carlos Pérez";
const Estudiante3 = "Jose Pérez";
const Estudiante4 = "Carlos Pérez";

//recojemos las notas de los estudiantes segun su nombre
function ObtenerEstudiante(nombreEstudiante) {
    var materias = 0;
    var resultado = 0;
    for (var i = 1; i < arrObj.length; i++) {
        if (arrObj[i].Estudiante == nombreEstudiante) {
            materias++;
            resultado += parseInt(arrObj[i].Calificacion);
        }

    }
    return [materias, resultado];
}

function ObtenerNotas(nombreEstudiante) {
    var promedio = 0;
    const [materias, resultado] = ObtenerEstudiante(nombreEstudiante);
    promedio = resultado / materias;
    if (promedio >= 5) {
        return console.log(`El promedio de ${nombreEstudiante} es de : ${promedio} Si Aprobo el curso`);
    } else {
        return console.log(`El promedio de ${nombreEstudiante} es de : ${promedio} No Aprobo el curso`);
    }
}
ObtenerNotas(Estudiante1);
ObtenerNotas(Estudiante2);
ObtenerNotas(Estudiante3);
ObtenerNotas(Estudiante4);

//Creamos variables donde estan los estudiantes
const Materia1 = "Frontend";
const Materia2 = "Backend";
const Materia3 = "Diseño";
const Materia4 = "DevOps";

function NotaMateria(nombreMateria) {
    var numeroDeNotas = 0;
    var resultadoMateria = 0;
    var notaMasAlta = 0;
    var estudianteNotaMasAlta = "";
    var notaMasBaja = 10;
    var estudianteNotaMasBaja = "";
    for (var i = 1; i < arrObj.length; i++) {
        if (arrObj[i].Materia == nombreMateria) {

            numeroDeNotas++;
            resultadoMateria += parseInt(arrObj[i].Calificacion);
            if (parseInt(arrObj[i].Calificacion) > notaMasAlta) {
                notaMasAlta = parseInt(arrObj[i].Calificacion);
                estudianteNotaMasAlta = arrObj[i].Estudiante;
            }
            if (parseInt(arrObj[i].Calificacion) < notaMasBaja) {
                notaMasBaja = parseInt(arrObj[i].Calificacion);
                estudianteNotaMasBaja = arrObj[i].Estudiante;
            }
        }
    }
    return [numeroDeNotas, resultadoMateria, notaMasAlta, notaMasBaja, estudianteNotaMasAlta, estudianteNotaMasBaja]
}

function PromedioMaterias(nombreMateria) {
    var promedio = 0;
    const [numeroDeNotas, resultadoMateria, notaMasAlta, notaMasBaja, estudianteNotaMasAlta, estudianteNotaMasBaja] = NotaMateria(nombreMateria);
    promediomateria = resultadoMateria / numeroDeNotas;
    return console.log(`La Materia ${nombreMateria} tiene un promedio de nota de ${promediomateria}. El estudiante con la mejor nota es : ${estudianteNotaMasAlta} con una nota de : ${notaMasAlta} y el estudiante con la menor nota es : ${estudianteNotaMasBaja} con una nota de : ${notaMasBaja}`);

}

PromedioMaterias(Materia1);
PromedioMaterias(Materia2);
PromedioMaterias(Materia3);
PromedioMaterias(Materia4);




/* for (var i = 1; i < arrObj.length; i++) {
    if (arrObj[i].Estudiante == Estudiante1) {
        materias1++;
        resultado1 += parseInt(arrObj[i].Calificacion);
    }

}
console.log(`numero de materias cursadas ${materias1}`);

console.log(resultado1);
promedio1 = resultado1 / materias1
if (promedio1 >= 5) {
    console.log(`El promedio de ${Estudiante1} es de ${promedio1} Si Aprobo el curso`);
} else {
    console.log(`El promedio de ${Estudiante1} es de ${promedio1} No Aprobo el curso`);
}
 */

//recojemos las notas de los estudiantes segun su nombre
/* for (var i = 1; i < arrObj.length; i++) {
    if (arrObj[i].Estudiante == Estudiante2) {
        materias2++;
        resultado2 += parseInt(arrObj[i].Calificacion);
    }

}
console.log(`numero de materias cursadas ${materias2}`);
console.log(resultado2);
promedio2 = resultado2 / materias2
if (promedio2 >= 5) {
    console.log(`El promedio de ${Estudiante2} es de ${promedio2} Si Aprobo el curso`);
} else {
    console.log(`El promedio de ${Estudiante2} es de ${promedio2} No Aprobo el curso`);
}
 */
//recojemos las notas de los estudiantes segun su nombre
/* for (var i = 1; i < arrObj.length; i++) {
    if (arrObj[i].Estudiante == Estudiante3) {
        materias3++;
        resultado3 += parseInt(arrObj[i].Calificacion);
    }

}
console.log(`numero de materias cursadas ${materias3}`);
console.log(resultado3);
promedio3 = resultado3 / materias3
if (promedio3 >= 5) {
    console.log(`El promedio de ${Estudiante3} es de ${promedio3} Si Aprobo el curso`);
} else {
    console.log(`El promedio de ${Estudiante3} es de ${promedio3} No Aprobo el curso`);
} */


//recojemos las notas de los estudiantes segun su nombre
/* for (var i = 1; i < arrObj.length; i++) {
    if (arrObj[i].Estudiante == Estudiante4) {
        materias4++;
        resultado4 += parseInt(arrObj[i].Calificacion);
    }

}
console.log(`numero de materias cursadas ${materias4}`);
console.log(resultado4);
promedio4 = resultado4 / materias4
if (promedio4 >= 5) {
    console.log(`El promedio de ${Estudiante4} es de ${promedio4} Si Aprobo el curso`);
} else {
    console.log(`El promedio de ${Estudiante4} es de ${promedio4} No Aprobo el curso`);
} */