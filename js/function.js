// Funzione per creare il un Tag Padre e che contiene un Tag Figlio con un classe
function appendiDiv(tagHTML, classHTML, fatherHTML) {
    const tag = document.createElement(tagHTML);
    tag.className = classHTML;
    fatherHTML.append(tag);
    return tag;
}

// Funzione per la creazione dell'immagini grandi
function imgGrande() {
    for(let i = 0; i < images.length; i++) {
        const colHTML = document.createElement('div');
        colHTML.className = 'col-12 p-0';
            colHTML.innerHTML += `
            <img src="${images[i].url}" alt="${images[i].title}" class="img-grande">
            <h2 class="title">${images[i].title}</h2>
            <h3 class="description">${images[i].description}</h3>
            `
            document.querySelector('.row').append(colHTML);
    }
}

// BONUS 1: Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// Funzioner per la creazione delle immagini piccole
function imgPiccole() {
    for(let i = 0; i < images.length; i++) {
        const colPiccoleHTML = document.createElement('div');
        colPiccoleHTML.className = 'col p-0';
        colPiccoleHTML.innerHTML = `
        <img src="${images[i].url}" alt="${images[i].title}" class="img-piccole">
        `
        colPiccoleHTML.style='width:200px; height:150px;';
            colPiccoleHTML.addEventListener('click', function() {
                rimuoviImg();
                contatore = i;
                showImg();
                imgPiccoleActive[index].classList.remove('active');
                index = i;
                imgPiccoleActive[index].classList.add('active');
            });
        document.querySelector('.row-piccole').append(colPiccoleHTML);  
    }
}


// Funzione per rimuovere le altre immagini grandi non selezionate
function rimuoviImg() {
    imgGrandiHTML[contatore].classList.remove('show');
    titleHTML[contatore].classList.remove('show');
    descriptionHTML[contatore].classList.remove('show');
}

// Funzione per far vedere l'immagine grande
function showImg() {
    imgGrandiHTML[contatore].classList.add('show');
    titleHTML[contatore].classList.add('show');
    descriptionHTML[contatore].classList.add('show');
}


// Milestone 2: Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// Funzione che dopo il click della freccia destra passa a quella successiva
function imgSuccessiva () {
    rimuoviImg();
    const imgPiccoleActive = document.querySelectorAll('.img-piccole');
    imgPiccoleActive[index].classList.remove('active');
    contatore++;
    index++;
    if(contatore == images.length) {
        contatore = 0;
    }
    if(index == images.length) {
        index = 0;
    }
    showImg();
    imgPiccoleActive[index].classList.add('active');
}

// Funzione che dopo il click della freccia sinistra passa a quella precedente
function imgPrecedente () {
    rimuoviImg();
    const imgPiccoleActive = document.querySelectorAll('.img-piccole');
    imgPiccoleActive[index].classList.remove('active');
    contatore--;
    index--;
    if(contatore == images.length - 6) {
        contatore = 4;
    }
    if(index == images.length - 6) {
        index = 4;
    }
    showImg();
    imgPiccoleActive[index].classList.add('active');
}

// BONUS 2: Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

setInterval(imgSuccessiva, 3000);