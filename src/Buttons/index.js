import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  tasks.length > 0 && (
    <p className="buttons">
      <button className="buttons__button">
				{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
			</button>
			<button 
        className={`buttons__button${tasks.every(({ done }) => done) ? " buttons__button--disabled" : ""}`}
        disabled={tasks.every(({ done }) => done)}
      >
				Ukończ wszystkie
			</button>
    </p>
  )
);

export default Buttons;