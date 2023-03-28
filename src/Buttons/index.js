import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => {
  if(tasks.lenght === 0) {
    return null
  }
  
  return (
    <p className="buttons">
      <botton className="button__navigation">
				{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
			</botton>
			<botton className={`button__navigation${tasks.every(({done}) => done) ? " button__navigation--disabled" : ""}`}>
				Ukończ wszystkie
			</botton>
    </p>
  )
};

export default Buttons;