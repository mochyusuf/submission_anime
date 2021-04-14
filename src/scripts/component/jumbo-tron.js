class JumboTron extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .jumbotron{
                background-size: cover;
                color: white;
                text-shadow: 0px 3px 6px black;
                border-radius: 0px;
                margin-bottom: 0px;
            }

            .jumbotron h1 span{
                font-weight: 500;
            }

            .jumbotron .input-group{
                display: flex;
                box-shadow: 0px 3px 6px black;
                width: 75%;
                z-index: 0;
            }

            .jumbotron .btn{
                background-color: #2E51A2;
                color: white;
            }

            .jumbotron .btn:hover{
                background-color: #2E51A2;
            }

            @media screen and (max-width: 767px) {
                .jumbotron{
                    margin-top: 50px !important;
                }
                .jumbotron h1{
                    font-size: 24pt;
                }
                .jumbotron .input-group{
                    width: 100%;
                }
            }
        </style>
        <div class="jumbotron text-center mt-1">
            <div class="container mt-5">
                <h1 class="display-4 mb-5">Cari Semua Anime.<br></h1>
                <div class="input-group mb-3 ml-auto mr-auto">
                    <input type="text" class="form-control" id="searchTitle" placeholder="Cari anime berdasarkan judul" aria-label="Cari anime berdasarkan judul" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn" type="submit" id="searchButtonElement">Search</button>
                    </div>
                </div>
            </div>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }

}

customElements.define('jumbo-tron', JumboTron);
