class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            nav{
                background: #2E51A2;
                box-shadow: 0px 2px 6px black;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                z-index: 1 !important;
            }
            nav .navbar-brand{
                font-weight: 400;
                font-size: 18pt;
            }
            nav .navbar-brand span{
                font-weight: 700;
            }
        </style>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">MyAnimeList<span> Info</span></a>
            </div>
        </nav>`;
    }
}

customElements.define('app-bar', AppBar);
