import { getGifs } from "../helpers/getGifs";

const { useState, useEffect } = require("react")



export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  // Si se establece ninguna dependencia ([]), de esta forma solo se ejecuta una vez, similar al componentDidMount()
  useEffect(() => {
    getGifs(category)
      .then( imgs => {
          setstate({
            data: imgs,
            loading: false
          });          
      })
      .catch(error  => console.log(error));
  }, [category])

  return state;
}