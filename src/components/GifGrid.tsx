import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }: any) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2 className="">Cargando..</h2>}
      {/*isLoading ? <h2 className="">Cargando..</h2> : null*/}
      {/*<h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>*/}
      {/*gifs.map((gif) => (
        <p>{gif}</p>
      ))*/}
      <div className="card-grid">
        {/* Images map */}
        {images.map((img: any) => (
          //console.log(img);
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
