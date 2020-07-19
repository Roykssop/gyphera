import 'dotenv/config.js';
// dotenv used only for local server purpose
const {REACT_APP_GIPHY_API_KEY} = process.env;

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${REACT_APP_GIPHY_API_KEY}`;
  const request = await fetch(url);
  const {data} = await request.json();

  if (!data)
    return;
  
  const gifs = data.map( (img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    } 
  });

  return gifs;
}