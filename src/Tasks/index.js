import "./style.css"

const Tasks = (props) => (
  <ul className="task__block">
    {props.tasks.map(task => (
      <li 
        className={`${task.done & props.hideDoneTasks ? "task__item--hide" : "task__item"}`}
        key={task.id}
      >
        <button className="task__button task__button--toggleDone">
				  {task.done ? "✔" : ""}
			  </button>
			  <p className={`${task.done ? "task__item--done" : ""}`}>
				  {task.content}
			  </p>
			  <button className="task__button task__button--remove">
				  🗑
			  </button>
      </li>
    ))}
  </ul>
);

export default Tasks;