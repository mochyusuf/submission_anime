import img from '../../images/no-images.jpg';

class AnimeItem extends HTMLElement {
    constructor() {
        super();
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        const animeID = this._anime.mal_id;

        this.innerHTML = `
        <style>
            anime-item{
                margin-bottom: 50px
            }
            .anime-card{
                border-bottom:2px solid #fff;
                border-right:2px solid #fff;
                margin:5% auto 0 auto;
                overflow:hidden;
            }
            #anime-card-${animeID}{
                background:url(${this._anime.image_url}), url(${img});
                background-size:cover;
                background-position: center;
                border-radius:5px;
                width: 220px;
                height: 300px;
                transition-duration: 0.5s;
            }

            .overlay-anime-details {
                background:#ff4784;
                text-align:center;
                opacity:0;
                padding-top: 100%;
                padding-bottom: 100%;
                transition-duration: 0.4s;
                color: white;
            }

            #anime-card-${animeID}:hover .overlay-anime-details{
                opacity: 0.9;
                cursor: pointer;
            }

            .anime-content h5{
                text-align: center;
                width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: block;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            anime-item h6{
                text-align: center;
                color: grey;
            }
        </style>
        <div class="col-md-3 anime-content">
            <div class="anime-card" id="anime-card-${animeID}">
                <div class="overlay-anime-details" data-toggle="modal" data-target="#animeDetails" data-animeid="${animeID}">
                    <span id="view">${this._anime.title}</span>
                </div>
            </div>
            <h5>${this._anime.title}</h5>
        </div>
        <h6>(${this._anime.type})</h6>
        `;
    }
 }

 customElements.define("anime-item", AnimeItem);
