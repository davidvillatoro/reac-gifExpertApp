

    export const getGif = async (anime) =>{
        
        const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( anime)}&limit=10&api_key=8Ed5OzDucrlOMgOBlNyBKCcqYaI8WN1c`;

        //utilazaremso fech
        const resp = await fetch(url);
        const {data} = await resp.json();  //aqui hacemos destructuracion de la datra dente de la data un arreglo mas corto

        const gifs = data.map( img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        
        return gifs
    }

