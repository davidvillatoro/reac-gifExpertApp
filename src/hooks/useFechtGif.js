import { useState, useEffect } from "react";
import { getGif } from '../helpers/getGifs';

const useFetchGif = ( anime ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect ( () =>{

        getGif( anime )
            .then( imgs =>{
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    })
                }, 1000);
            })



    }, [ anime ]);



    return  state ; // el arreglo incial data:[]  y loading 

}
 
export default useFetchGif;

