// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

 const Invite = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']


 const inviteObject = Invite.map(function (el, indx) {
        
     return {name: el, tableName: 'Vips Table', seat: indx +1}

 })
console.log(inviteObject)





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

const students = [
    { id: 213, name:'Marco della Rovere ', grades: 78},
    { id: 110, name:'Paola Cortellessa  ', grades: 96},
    { id: 110, name:'Andrea Mantegna ', grades: 48},
    { id: 145, name:'Gaia Borromini    ', grades: 74},
    { id: 196, name:'Luigi Grimaldello ', grades: 68},
    { id: 102, name:'Piero della Francesca ', grades: 50},
    { id: 120, name:'Francesca da Polenta ', grades: 84}

]
const allGrades70 = []
const sumnIdAndGrades = []



for(let i = 0; i < students.length; i++){
    let  singleStudents = students[i]
    let singleGradesStudents = singleStudents.grades;
    let  singleId = singleStudents.id;
    let singleName = singleStudents.toUpperCase()
    
    if(singleId > 120 && singleGradesStudents > 70){
        sumnIdAndGrades.push(singleStudents);
    }
    if(singleGradesStudents > 70){
        allGrades70.push(singleStudents);
    }
    
}
console.log(  students, allGrades70, sumnIdAndGrades)
