// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

//  const Invite = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

//  const tableName = 'Vips Table';
 
//  const inviteObject = Invite.map(function (el, index) {
//      return {name: el.toUpperCase(), tableName: tableName, seat: index + 1}

//  })

 
// console.log(inviteObject)





// *SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// Questo è l’elenco degli studenti:
// Id   Name                    Grades
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 110  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84

// const students = [
//     { id: 213, name:'Marco della Rovere ', grades: 78},
//     { id: 110, name:'Paola Cortellessa  ', grades: 96},
//     { id: 110, name:'Andrea Mantegna ', grades: 48},
//     { id: 145, name:'Gaia Borromini    ', grades: 74},
//     { id: 196, name:'Luigi Grimaldello ', grades: 68},
//     { id: 102, name:'Piero della Francesca ', grades: 50},
//     { id: 120, name:'Francesca da Polenta ', grades: 84}

// ]
// const allGrades70 = []
// const sumnIdsAndGrades = []




// for(let i = 0; i < students.length; i++){
//     let  singleStudent = students[i]
//     let singleGradeStudent = singleStudent.grades;
//      let  singleId = singleStudent.id;
//      singleStudent.name = students[i].name.toUpperCase();
    
//     if(singleId > 120 && singleGradeStudent > 70){
//         sumnIdsAndGrades.push(singleStudent);
//     }
//     if(singleGradeStudent > 70){
//         allGrades70.push(singleStudent);
//     }
    
// }
// console.log(students, allGrades70, sumnIdsAndGrades)




// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal


// const bicycles = [
//     {
//         name: 'Atala',
//         weight: 25
//     },
//     {
//         name: 'Basso',
//         weight: 11
//     },
//     {
//         name: 'Bianchi',
//         weight: 22
//     },
//     {
//         name: 'Bottecchia',
//         weight: 60
//     },
//     {
//         name: 'Adriatica',
//         weight: 32
//     }
// ]

//  console.log(bicycles)


// let lightestBikeFound = bicycles[0];
// for (let i = 1; i < bicycles.length; i++) {
//     let currentElement = bicycles[i];

//     if (currentElement.weight < lightestBikeFound.weight) {
//         lightestBikeFound = currentElement;
//     }

// }
// const { name, weight } = lightestBikeFound;
// console.log(`la bicicletta piu leggera di tutte le altre é ${name} che pesa ${weight}`);























// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



const teams = [
    {
        name: 'Roma',
        points: Math.floor(Math.random() * 100) + 1, 
        fouls : Math.floor(Math.random() * 10) + 1

    },
    {
        name: 'Napoli',
        points: Math.floor(Math.random() * 100) + 1, 
        fouls : Math.floor(Math.random() * 10) + 1
    },
    {
        name: 'Juventus',
        points: Math.floor(Math.random() * 100) + 1, 
        fouls : Math.floor(Math.random() * 10) + 1
    },
    {
        name: 'Fiorentina',
        points: Math.floor(Math.random() * 100) + 1, 
        fouls : Math.floor(Math.random() * 10) + 1
    },
    {
        name: 'Sampdoria',
        points: Math.floor(Math.random() * 100) + 1, 
        fouls : Math.floor(Math.random() * 10) + 1
    }
]



const {name, points, fouls} = teams
console.log(teams)
 


console.log(newArray)
