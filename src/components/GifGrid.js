import React, { } from 'react'
import useFetchGif from '../hooks/useFechtGif'
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({anime}) => {



    const { loading, data:images} = useFetchGif( anime );

 
 

  return (
        <>  
            <h3>{anime}</h3>

            {loading && <p> cargando zorrita ..</p> }

            <div className='card-grid'> 
                {
                    // primera formade hacerlo  sin destructuracion 
                    /*   images.map(imagen => {
                        return <li key={imagen.id} > {imagen.title}</li>
                    }) */
                        //-------------------------------------------------
                        
                        
                     images.map ( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img} // mandamos otro objeto  con la copia del id para hacer destructuracion  del id, title y url
                        />
                     )) 
                }
                
            </div>
         </>
  )
}
 