// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

const Invite = [
    { tableName: 'Tavolo Vip', userName: 'Brad Pitt', seat: 17},
    { tableName: 'Tavolo Vip', userName: 'Jhonny Deep', seat: 54},
    { tableName: 'Tavolo Vip', userName: 'Lady Gaga', seat: 67},
    { tableName: 'Tavolo Vip', userName: 'Cristiano ronaldo', seat: 12},
    { tableName: 'Tavolo Vip', userName: 'Georgina Rodriguez', seat: 35},
    { tableName: 'Tavolo Vip', userName: 'Chiara Ferragni', seat: 87},
    { tableName: 'Tavolo Vip', userName: 'Fedez', seat: 15},
    { tableName: 'Tavolo Vip', userName: 'George Clooney', seat: 22},
    { tableName: 'Tavolo Vip', userName: 'Amal Clooney', seat: 26},
    { tableName: 'Tavolo Vip', userName: 'Maneskin', seat: 90}
]

console.log(Invite)





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
    { id: 213, name:'MARCO DELLA ROVERE', grades: 78},
    { id: 110, name:'PAOLA CORTELLESSA', grades: 96},
    { id: 110, name:'ANDREA MARTEGNA', grades: 48},
    { id: 145, name:'GAIA BORROMINI', grades: 74},
    { id: 196, name:'LUIGI GRIMALDELLO', grades: 68},
    { id: 102, name:'PIERO DELLA FRANCESCA', grades: 50},
    { id: 120, name:'FRANCESCA  DA POLENTA', grades: 84}

]

console.log(students)