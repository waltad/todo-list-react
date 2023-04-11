import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        className={`${task.done & hideDone ? "tasks__item--hide" : "tasks__item"}`}
        key={task.id}
      >
        <button className="tasks__button tasks__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        <p className={`${task.done ? "tasks__item--done" : ""}`}>
          {task.content}
        </p>
        <button onClick={() => removeTask(task.id)} className="tasks__button tasks__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;