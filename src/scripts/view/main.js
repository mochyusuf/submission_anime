import '../component/anime-list.js';
import DataSource from '../data/data-source.js';
import DataDetails from '../data/data-details.js';

const main = () => {
    const animeListElement = document.querySelector("anime-list");
    const displaySearchTitle = document.getElementById('searchTitle');
    const buttonSearch = document.getElementById('searchButtonElement');
    const valueSearch = document.getElementById('searchTitle');

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchAnime(valueSearch.value);
            renderResult(result);
            displaySearchTitle.innerText = `Menampilkan ${result.length} hasil dari ${valueSearch.value}`;
        } catch (message) {
            fallbackResult(message)
        }
    };

        const renderResult = results => {
            animeListElement.animes = results;
       };

        const fallbackResult = message => {
            animeListElement.renderError(message);
        };

    buttonSearch.addEventListener('click', onButtonSearchClicked);

    // Modal-Details
    const modalDetailsElement = document.querySelector("modal-details");

    document.addEventListener('click', async function(element){
        if(element.target.classList.contains('overlay-anime-details')){
            try{
                const animeID = element.target.dataset.animeid;
                const animeDetails = await DataDetails.showDetails(animeID);
                modalAnimeDetails(animeDetails)
            }
            catch(message){
                console.log(message);
            }
        }
    });

    function modalAnimeDetails(animeDetails){
        const animDetails = showAnimeDetails(animeDetails);
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = animDetails;
    }

    function showAnimeDetails(animeDetails){
        return `
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${animeDetails.image_url}" alt="No Image" class="img-fluid">
                    <p><strong>Score : </strong>${animeDetails.score}</p>
                </div>
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${animeDetails.title} </h4></li>
                        <li class="list-group-item"><strong>Rated : </strong>${animeDetails.rating}</li>
                        <li class="list-group-item"><strong>Synopsis</strong>: <br>${animeDetails.synopsis}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
}

export default main;
