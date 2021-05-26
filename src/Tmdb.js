const API_KEY = '0381b04567c30e4808f8734cc19435d7';
const API_BASE = 'https://api.themoviedb.org/3';

/*
Lista de Categorias que pegaremos:
-Originais da Netflix
-Recomendados (Trending)
-Em Alta (Top Rated)
-Ação
-Comedia
-Terror
-Romance
-Documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}




export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Produzido pela Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topRated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        if(movieId){
            switch(type){
                case 'movie':
                    return  await basicFetch (`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                
                case 'tv':
                    return await basicFetch (`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);                 
                default:
                    console.log("Err")    
                
            }
        }

    }
}