export const getGifs = async (category: any) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=w28mRL8uzpZ892i80O9ObBwFVFRBQFwh&q=${category}&limit=20`;
  const response = await fetch(url);

  const { data } = await response.json();

  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  //console.log(gifs);
  return gifs;
};
