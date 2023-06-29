import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectTasks, selectHideDone } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item
          hidden={task.done && hideDone}
          key={task.id}
        >
          <Button
            toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content
            done={task.done}
          >
            {task.content}
          </Content>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  )
};

export default TaskList;
