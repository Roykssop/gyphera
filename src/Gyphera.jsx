import React, {useState} from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'

const GifExpertApp = (params) => {
  const [categories, setCategories] = useState(['Spiderman']);

  return (
    <>
      <h2> Gyphera </h2>
      <hr/>
      <AddCategory setCategories={setCategories} />
      <ol>
        { categories.map((category) => ( 
            <GifGrid category={category} key={category} />
          )) 
        }
      </ol>
    </>
  )
}

export default GifExpertApp