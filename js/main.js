/* Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
 */


const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        imageURL: "",
        classeScelta: "",
        images: [{
                nome: 'Svezia',
                title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/01.jpg",
            },
            {
                nome: 'Svizzera',
                title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/02.jpg",
            },
            {
                nome: 'Gran Bretagna',
                title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/03.jpg",
            },
            {
                nome: 'Germania',
                title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/04.jpg",
            },
            {
                nome: 'Paradise',
                title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/05.jpg",
            }
        ],
    },
    methods: {
        saluta: function () {
            console.log(this.message);
        }
    }
});


let itemsContent = '';
let thumbnailsContent = '';


for (let i = 0; i < imageRicca.length; i++) {
    itemsContent += `
    <div class="item">
        <img src="${imageRicca[i].image}" alt="${imageRicca[i].nome} picture">
        <div class="item-description px-3">
            <h2>${imageRicca[i].nome}</h2>
            <p>${imageRicca[i].forma}</p>
        </div>
    </div>`

    thumbnailsContent += `
    <div class="thumbnail">
        <img src = "${imageRicca[i].image}"
        alt = "Thumbnail of ${imageRicca[i].nome} picture">
    </div>`
}

// $ riempiamo i contenuti

// recupero il wrapper dei singoli items
const itemsElement = document.querySelector('div .my-carousel-images');

// ne riempio il contenuto sovrascrivendolo
itemsElement.innerHTML = itemsContent;

// recupero il wrapper dei thumbnails
const thumbnailsElement = document.querySelector('div .my-thumbnails');

// lo aggiungo al contenuto già presente (i bottoni prev e next)
thumbnailsElement.innerHTML += thumbnailsContent;

// inizializzo gli elementi che voglio visualizzare in active per primi
let activeElement = 2;

//  ho preso la lista degli items e da questa ho preso l'elemento all'indice activeElement, al quale ho aggiunto la classe active
document.getElementsByClassName('item')[activeElement].classList.add('active');

//  ho preso la lista dei thumbnail e da questa ho preso l'elemento all'indice activeElement, al quale ho aggiunto la classe active
document.getElementsByClassName('thumbnail')[activeElement].classList.add('active');


function switchToImage(carouselSelector, thumbnailSelector, activeElement, elementToHide) {
    // rimuove dagli elementi coinvolti le classi active
    document.getElementsByClassName(carouselSelector)[elementToHide].classList.remove('active');
    document.getElementsByClassName(thumbnailSelector)[elementToHide].classList.remove('active');

    // infine aggiunge ai nuovi elementi selezionati la classe active
    document.getElementsByClassName(carouselSelector)[activeElement].classList.add('active');
    document.getElementsByClassName(thumbnailSelector)[activeElement].classList.add('active');
};

// recupero l'elemento sul quale voglio applicare il comportamento "next"
const next = document.querySelector('div.my-next');

// gli aggiungo un event listener con una funzione anonima che
next.addEventListener('click', function () {
    //assegno un elemnto gli elementi che voglio visualizzare in active
    let oldElement = activeElement;
    // fa un controllo sul raggiungimento dell'ultimo elemento
    if (activeElement === imageRicca.length - 1) {
        activeElement = 0;
    } else {
        activeElement++;
    }
    //assegno la funzione
    switchToImage('item', 'thumbnail', activeElement, oldElement);
});

// recupero l'elemento sul quale voglio applicare il comportamento "previous"
const prev = document.querySelector('div.my-previous');

// gli aggiungo un event listener con una funzione anonima che
prev.addEventListener('click', function () {
    //assegno un elemnto gli elementi che voglio visualizzare in active
    let oldElement = activeElement;
    // fa un controllo sul raggiungimento dell'ultimo elemento
    if (activeElement === 0) {
        activeElement = imageRicca.length - 1;
    } else {
        activeElement--;
    }

    //assegno la funzione
    switchToImage('item', 'thumbnail', activeElement, oldElement);
});


//assegno un variabile il booleano
let isForwardScroll = true;


//inserisco dei nuovi bottoni
document.getElementById('my-after-carousel').innerHTML += `
<button id="my-button" class="btn btn-primary">Inverti l\'ordine di scorrimento</button>
<button id="my-stop-button" class="btn btn-primary">Interrompi lo scorrimento</button>`;

// inserisco ad un bottone che fa scrollare
document.getElementById('my-button').addEventListener('click', function () {
    isForwardScroll = !isForwardScroll;
});

//attraverso l'uso delle timing functions anche una funzionalità di scorrimento
let autoScroll = setInterval(function () {
    if (isForwardScroll) {
        next.click();
    } else {
        prev.click();
    }
}, 3000);


//bottone che blocca lo scorrrimento
document.getElementById('my-stop-button').addEventListener('click', function () {
    clearInterval(autoScroll);
});