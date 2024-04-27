import React, { useState } from "react"

import './App.css';
import { ButtonFunction } from "./components/button";
import { InputClass, InputFunction } from "./components/input";

function App() {
  const [value, setValue] = useState("")

  function handleChangeInput(inputValue) {
    setValue(inputValue)
  }

  return (
    <>
      <InputClass
        onChange={(event) => handleChangeInput(event.target.value)}
        value={value}
      />
      <InputFunction
        value={value}
      />

      <ButtonFunction />
      <ButtonFunction />
    </>
  );
}

export default App;
