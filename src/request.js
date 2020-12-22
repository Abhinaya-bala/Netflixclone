const api_key = "de2b31cc4a6c3b37e11243f42613f4b1"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
    fetchHorror: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchAdventure: `/discover/movie?api_key=${api_key}&with_genres=12`,
    fetchAnimation: `/discover/movie?api_key=${api_key}&with_genres=16`,
    fetchDrama: `/discover/movie?api_key=${api_key}&with_genres=18`,
    fetchFantasy: `/discover/movie?api_key=${api_key}&with_genres=14`,
    fetchHistory: `/discover/movie?api_key=${api_key}&with_genres=36`,
    fetchMusic: `/discover/movie?api_key=${api_key}&with_genres=10402`,
    fetchMystery: `/discover/movie?api_key=${api_key}&with_genres=9648`,
    fetchScienceFiction: `/discover/movie?api_key=${api_key}&with_genres=878`,
    fetchWar: `/discover/movie?api_key=${api_key}&with_genres=10752`,
}

export default requests;

