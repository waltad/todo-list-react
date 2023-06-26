import { List, Item, Content, Button } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item
        hidden={task.done && hideDone}
        key={task.id}
      >
        <Button
          toggleDone onClick={() => toggleTaskDone(task.id)}
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
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default TaskList;
