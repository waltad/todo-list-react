import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "./../../common/Section";
import Header from "./../../common/Header";
import Container from "./../../common/Container";
import { useState } from "react";
import { useTasks } from "../../useTasks";
// import { useSelector } from "react-redux";
// import { selectTasks } from "./tasksSlice";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  // const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
