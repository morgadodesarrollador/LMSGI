
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ categoria }) => {
  
  const { images, isLoading } = useFetchGifs(categoria)

  return (
    <>
        <h2> { categoria } </h2>
        {
          isLoading && (<h2>Cargando ...</h2>)

        }
        <div className="card-grid">
          { 
            images.map( ( image ) => (
              <GifGridItem 
                key= { image.id }
                //operador spread: espacimos todas las propiedades
                { ...image } 
                //no son necesarias
                // title = { image.title }
                // url = { image.url }
              />
            ))
          }
        </div>
    </>
  )
}
