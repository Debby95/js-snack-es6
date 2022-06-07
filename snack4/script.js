//creo un elenco studenti di una facoltà con il tot dei loro voti
let students = [
    {   name: "Marco", 
        id: 213, 
        grades: 78 
    },
    {   name: "Paola", 
        id: 110, 
        grades: 96 
    },
    {   name: "Andrea", 
        id: 250, 
        grades: 48 
    },
    {   name: "Gaia", 
        id: 145, 
        grades: 74 
    },
    {   name: "Luigi", 
        id: 196, 
        grades: 68 
    },
    {   name: "Piero", 
        id: 102, 
        grades: 50 
    },
    {   name: "Francesca", 
        id: 120, 
        grades: 84 
    },
];

//console.table(students);

//+ nuovo arrey con i nomi degli studenti in maiuscolo
const studentsList = students.map((students) => {
    
    students = students.name.toUpperCase();

    return {
        students,
    }
})

console.table(studentsList);

//+ nuovo arrey con lista degli studenti che hanno voto maggiore di 70
const studentsListWithGradesMoreThan70 = students.filter((students) => {

    return students.grades > 70;
});

console.table(studentsListWithGradesMoreThan70);
