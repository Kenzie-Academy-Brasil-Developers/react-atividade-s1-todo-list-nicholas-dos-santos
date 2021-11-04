import { useState } from "react";
import "./style.css";

function Form({ addTodos }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="div__input">
      <input
        className="input"
        type={Text}
        placeholder={"Type a new to do!"}
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button className="btn" onClick={() => addTodos(userInput)}>
        Enviar
      </button>
    </div>
  );
}

//botão "Enviar" que fará a iteração no nosso state.

export default Form;
