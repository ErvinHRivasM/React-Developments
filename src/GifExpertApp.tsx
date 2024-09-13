import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory: any) => {
    // setCategories((cat) => [...cat, "Third category"]);
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    //console.log(newCategory);
  };

  console.log(categories);

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/*Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(event: any) => onAddCategory(event)}
      />

      {/*Listado Gif */}
      {/*<button onClick={onAddCategory}>Add</button>*/}
      <ol>
        {categories.map((category) => (
          //return <li key={c}>{c}</li>;
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {/*Gif Item. */}
    </>
  );
};
