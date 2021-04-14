class DataDetails {
    static showDetails(animeID) {
        const baseURL = 'https://api.jikan.moe/v3/';
        return fetch(`${baseURL}anime/${animeID}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson){
                return Promise.resolve(responseJson);
            } else{
                return Promise.reject(`${animeID} is not found`);
            }
        })
    }
}

export default DataDetails;
