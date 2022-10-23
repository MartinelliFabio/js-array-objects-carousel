/*  -----------------------------------------------------------------------------------------------
    Consegna:
    Dato un array di oggetti letterali con:
    - url dell’immagine
    - titolo
    - descrizione
    Creare un carosello come nella foto allegata.
    
    Milestone 0:
    Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
    
    Milestone 1:
    Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
    Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
    
    Milestone 2:
    Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
    
    BONUS 1:
    Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
    
    BONUS 2:
    Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
    
    BONUS 3:
    Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
--------------------------------------------------------------------------------------------------- */

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// Creo le variabili bottoni dai
const frecciaDestraHTML = document.getElementById('right-arrow');
const frecciaSinistraHTML = document.getElementById('left-arrow');

// Bottoni per l'autoplay: Start, Inverti e Stop
const bottoneStartHTML = document.getElementById('start');
const bottoneInvertiHTML = document.getElementById('inverti');
const bottoneStopHTML = document.getElementById('stop');

//Milestone 0: Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Crea il div con classe row per appenderlo al div containerHTML
const containerHTML = document.getElementById('container');
appendiDiv('div', 'row', containerHTML);
imgGrande(); // Richiamo la funzione per "creare" l'immagine grande

const imgGrandiHTML = document.querySelectorAll('.img-grande');
const titleHTML = document.querySelectorAll('.title');
const descriptionHTML = document.querySelectorAll('.description');

// Milestone 1: Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello. Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Crea il div con classe row per appenderlo al div containerPiccoleHTML
const containerPiccoleHTML = document.getElementById('container-piccole');
appendiDiv('div', 'row row-piccole', containerPiccoleHTML);


// BONUS 1: Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

let contatore = 0; // Inizialillo un contatore a 0 per contare l'immagini
showImg(); // Richiamo la funzione per visualizzare l'immagine grande
imgPiccole(); // Richiamo la funzione per "creare" tutte le immagine piccole

// Sezione per selezionari l'immagine piccola e aggiungere la classe active per visualizzare quella selezionata
const imgPiccoleActive = document.querySelectorAll('.img-piccole');
let index = 0; // Inizializzo un index a 0 per contare l'immagini
imgPiccoleActive[index].classList.add('active');  


// BONUS 2: Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3: Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
timer(); // Richiamo la funzione timer


// Click frecce destra e sinistra
frecciaDestraHTML.addEventListener('click', imgSuccessiva);
frecciaSinistraHTML.addEventListener('click', imgPrecedente);








