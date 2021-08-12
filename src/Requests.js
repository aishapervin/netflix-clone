const API_KEY="42cc979c95018fd83ce45b1534b7b177";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/movie/top_rated?api_key=${API_KEY}&with_genres=99`,
}

export default requests;