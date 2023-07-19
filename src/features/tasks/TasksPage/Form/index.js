import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, StyledForm } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const clearFocusInput = () => {
    setNewTaskContent("");
    inputRef.current.focus();
  };

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent) {

      dispatch(addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      }));

      clearFocusInput();
    }
    clearFocusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
        autoFocus
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
