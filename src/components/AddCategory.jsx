import React, { useState } from 'react';
import PropTypes from 'prop-types';



const AddCategory = ({setCategories}) => {
  const [textBox, settextBox] = useState('')

  const handleOnChange = ({target}) => settextBox(target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if(textBox.trim().length > 2) {
      setCategories( categories => [textBox, ...categories]); 
      settextBox('');     
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input 
        type="text"
        placeholder="Ingrese categoría"
        name="categoria"
        onChange={handleOnChange} 
        value={textBox} 
      />
      <button className="btn">Search Gifs</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
