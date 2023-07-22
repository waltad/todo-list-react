import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");
  
  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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
