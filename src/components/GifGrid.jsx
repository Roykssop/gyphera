import React  from 'react'

import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



const GifGrid = ({category}) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounceIn"> {category} </h3>
      { loading && <p className="animate__animated animate__flash"> Cargando... </p>}
      {
        (images)
        ?
          <div className="grid">
            { 
              images.map( image => ( 
                  <GifGridItem 
                    {...image}
                    key={image.id}
                  /> 
              ))
            }
          </div>
        :
          <p>Data not found ...</p>
      }
    </>
  )
}

export default GifGrid
