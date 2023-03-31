import "./style.css"

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        className={`${task.done & hideDoneTasks ? "tasks__item--hide" : "tasks__item"}`}
        key={task.id}
      >
        <button className="tasks__button tasks__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        <p className={`${task.done ? "tasks__item--done" : ""}`}>
          {task.content}
        </p>
        <button className="tasks__button tasks__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;