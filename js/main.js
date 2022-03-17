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
        activeElement: 1,
        autoPlay: null,
        images: [{
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/01.jpg",
            },
            {
                title: 'Svizzera',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/02.jpg",
            },
            {
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/03.jpg",
            },
            {
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/04.jpg",
            },
            {
                title: 'Paradise',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: "img/05.jpg",
            }
        ],
    },
    methods: {
        nextSlide() {
            if (this.activeElement === this.images.length - 1) {
                this.activeElement = 0;
            } else {
                this.activeElement++;
            }
        },
        prevSlide() {
            if (this.activeElement === 0) {
                this.activeElement = this.images.length - 1;
            } else {
                this.activeElement--;
            }
        },
        isAutoPlay() {
            //quando uso mouseover uso tutto
            clearInterval(this.autoPlay);
            //quando uso mouseenter uso solo questo
            this.autoPlay = setInterval(
                this.nextSlide, 3000);
        },
        stopPlay() {
            clearInterval(this.autoPlay);
            this.autoPlay = null;
        },
        changeImage(indexImage) {
            this.activeElement = indexImage;
        },
    }
});