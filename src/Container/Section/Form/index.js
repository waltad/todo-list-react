import { useState, useRef } from "react";
import { Button, Input, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef("");
  
  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (trimmedNewTaskContent) {
      addNewTask(trimmedNewTaskContent);
    };
    setNewTaskContent("");
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <Input
        value={newTaskContent}
        type="text" placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </StyledForm>
  )
};

export default Form;