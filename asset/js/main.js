/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
 */




// array con oggetti

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];







// stampare in console gli oggetti dell'array
for (let i = 0; i < team.length; i++) {
    //console.log(team[i]);

    // assegno le keys nell'array a una variabile
    let keys = Object.keys(team[i]);

    //creo il div contenente gli ogetti
    document.querySelector('div').innerHTML += `
    <div id="${i}" class=" card col-3">

        <img src="./asset/img/${team[i][keys[2]]}" alt="" class="card-img-top">

        <div class="card-body">
            <h5 class="card-title">${team[i][keys[0]]}</h5>
            <p class="card-text">${team[i][keys[1]]}</p>
            
        </div>
    </div>
    `
};

