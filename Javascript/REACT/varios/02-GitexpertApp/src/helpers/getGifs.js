export const getGifs = async(categoria)  => {
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=jcf6z836FEaZ6PtK0x3e7YG6i8Xotbzh&q=${categoria}&limit=20`;
    const respuesta = await fetch (url);
    const { data } = await respuesta.json()
  
    const gifs = data.map ( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    return gifs
}