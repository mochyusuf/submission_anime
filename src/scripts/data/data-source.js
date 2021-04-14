class DataSource {
    static searchAnime(keyword) {
        const baseURL = 'https://api.jikan.moe/v3/';
        return fetch(`${baseURL}search/anime?q=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            } else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;
