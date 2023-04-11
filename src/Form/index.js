import { useState } from "react";
import "./style.css";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        className="form__input"
        type="text" placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus required
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;