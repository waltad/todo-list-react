import { Buttons, Button } from "./styled";

const UpperButtons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  tasks.length > 0 && (
    <Buttons>
      <Button
        onClick={toggleHideDone}
      >
				{hideDone ? "Pokaż" : "Ukryj"} ukończone
			</Button>
			<Button
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
				Ukończ wszystkie
			</Button>
    </Buttons>
  )
);

export default UpperButtons;