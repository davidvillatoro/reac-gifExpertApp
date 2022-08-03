import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddAnime = ({setAnimes}) => {

      const [valorInput, establecerValorInput]=useState("");


      const capturarValorInput = (e) => {

            establecerValorInput(e.target.value);

      };

      const funcionEnter = (e) =>{

        e.preventDefault();

        if( valorInput.trim().length > 2 ){

          setAnimes(ANVI=> [ valorInput , ...ANVI]);
          
          establecerValorInput("");
        }


   
      }


    return ( 
            <form onSubmit={funcionEnter}>

                <h3> {valorInput}</h3>
                <input
                    type="text" 
                     value={valorInput}
                     onChange={capturarValorInput}
                 />
            </form>
        
     );
}
 

AddAnime.propTypes ={
  setAnimes: PropTypes.func.isRequired
}


export default AddAnime;