// creo un array di oggetti che descrive le bici da corsa
const bici = [ 
    {
        nome: "Wilier 0 SLR",
        peso: 6.5,
    },
    {
        nome: "Cannondale SuperSix EVOHi-MOD Disc Dura Ace",
        peso: 8.0,
    },
    {
        nome: "Trek Emonda 2020",
        peso: 6.81,
    },
    {
        nome: "Trek Emonda SLR",
        peso: 4.65,
    },
    {
        nome: "SAVA Phantom 2.0 700C",
        peso: 8.1,
    },
];

//console.table(bici);

//trovo la bici con peso minore e creo ciclo for
const {nome, peso} = bici[0];

let biciPesoMin = {
    nome,
    peso,
};

const  h1 = document.querySelector("h1");

for (let i = 1; i < bici.length; i++) {
    
    const {peso, nome} = bici[i];
    

        if (biciPesoMin.peso > peso) {
            biciPesoMin = {
                nome,
                peso,
        };
    };
};


//stampo in html la bici con peso minore
h1.innerHTML = `<h1>${biciPesoMin.nome} , ${biciPesoMin.peso}</h1>`

//console.log(biciPesoMin);


