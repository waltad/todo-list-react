import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  tasks.length > 0 && (
    <p className="buttons">
      <button onClick={toggleHideDone} className="buttons__button">
				{hideDone ? "Pokaż" : "Ukryj"} ukończone
			</button>
			<button 
        onClick={setAllDone}
        className={`buttons__button${tasks.every(({ done }) => done) ? " buttons__button--disabled" : ""}`}
        disabled={tasks.every(({ done }) => done)}
      >
				Ukończ wszystkie
			</button>
    </p>
  )
);

export default Buttons;