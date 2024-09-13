import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category: any) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(); //same the below code
    //getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  //getGifs(category);
  return {
    images,
    isLoading,
  };
};
