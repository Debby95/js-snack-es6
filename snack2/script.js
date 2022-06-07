//creo un array di oggetti di squadre di calcio e ognuna di loro avrà nome, punti fatti e falli subiti
const footballSquad = [
    {
        nome: "Inter",
        puntiTot: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiTot: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juve",
        puntiTot: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiTot: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiTot: 0,
        falliSubiti: 0,
    },
];

console.table(footballSquad);

//genero numeri random per punti tot e falli subiti
for (let i = 0; i <= footballSquad.length; i++) {
    
    //creo numeri random per punti tot
    footballSquad.puntiTot = Math.floor(Math.random() * 10);

    //creo numeri random per falli subiti
    footballSquad.falliSubiti = Math.floor(Math.random() * 5);

    //stampo in console i punti tot e i falli subiti
    console.table(footballSquad.puntiTot, footballSquad.falliSubiti);

    //creo un arrey usando la destructuring i cui elementi contengono solo nomi e falli subiti

    const {nome, falliSubiti} = footballSquad[i];

    console.table(nome, footballSquad.falliSubiti);
};





