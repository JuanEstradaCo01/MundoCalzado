const arrayItems = []

const curso = {
    comision: 31445,
    titulo: "JavaScript",
    profesor: "Santiago",
    alumnos: 200,
    estado: "en proceso...",
    terminado: false,
    precioCurso: 1500,
    abonado: 350,
}

// Template strings

console.log(`Tu curso es ${curso.titulo} y tu comision es ${curso.comision}. Tu saldo pendiente es de $${curso.precioCurso - curso.abonado}`)


//Copiando objetos:

let nuevoCurso = {...curso}

nuevoCurso.profesor = "Andres"
console.log(curso, nuevoCurso)


//Propiedades dinamicas:

let propiedadAModificar = "estado"
let nuevoValor = "terminado"

curso[propiedadAModificar] = nuevoValor

console.log(nuevoCurso)