import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  tasks.length > 0 && (
    <p className="buttons">
      <button className="button__navigation">
				{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
			</button>
			<button 
        className={`button__navigation${tasks.every(({ done }) => done) ? " button__navigation--disabled" : ""}`}
        disabled={tasks.every(({ done }) => done)}
      >
				Ukończ wszystkie
			</button>
    </p>
  )
);

export default Buttons;