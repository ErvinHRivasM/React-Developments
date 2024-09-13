import { useState } from "react";

export const AddCategory = ({ onNewCategory }: any) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: any) => {
    //console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue("");
    //console.log(inputValue);
  };

  {
    /* <form onSubmit={(event) => onSubmitForm(event)}>*/
  }
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};
