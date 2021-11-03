import { useState } from "react";

function Form({ addTodos }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <input
        type={Text}
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => addTodos(userInput)}>Enviar</button>
    </div>
  );
}

//botão "Enviar" que fará a iteração no nosso state.

export default Form;
