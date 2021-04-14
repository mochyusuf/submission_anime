import './anime-item.js';

class AnimeList extends HTMLElement{
    constructor(){
        super();
    }

    set animes(animes){
        this._animes = animes;
        this.render();
    }

    render() {
        this._animes.forEach(anime => {
            const animesItemElement = document.createElement("anime-item");
            animesItemElement.anime = anime;
            console.log(anime);
            this.appendChild(animesItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder text-center">${message}</h2>`;
    }
}

customElements.define("anime-list", AnimeList);
