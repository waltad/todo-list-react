import { StyledButtons, Button } from "./styled";

const UpperButtons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  tasks.length > 0 && (
    <StyledButtons>
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
    </StyledButtons>
  )
);

export default UpperButtons;