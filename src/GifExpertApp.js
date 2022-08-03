import React, {useState} from 'react';
import AddAnime from './components/AddAnime';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    //const animes = ["NARUTO","INUYASHA","WORLD TRIGGER"];

    const [animes, setAnimes]=useState(["NARUTO"]);
    
/* 
    const AgregarAnime =()=>{

        setAnimes([...animes  , "bleack"])
      // setAnimes(amv => [...animes, 'bleack'])

    }; */
 
    return ( 
        <> 
        <h2> GifExpertApp</h2>
        <hr />
         <AddAnime setAnimes={setAnimes} />
        {/* <button onClick={AgregarAnime} > AGREGAR</button> */}
        <hr />
        <ul>
            {
                animes.map(anime =>(
                    <GifGrid 
                        key={anime}
                        anime={anime} />
                ))
            }
        </ul>
       
       
        </>
     );
}
 


export default GifExpertApp;