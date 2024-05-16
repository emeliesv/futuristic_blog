import { useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const reset = () => {
    setInputValue("");
  };

  return { inputValue, onChange, reset };
};

export default useInput;
