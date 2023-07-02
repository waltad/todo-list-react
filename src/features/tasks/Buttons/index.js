import { useDispatch, useSelector } from "react-redux";
import { StyledButtons, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectAreTaskEmpty,
  selectIsEveryTasksDone,
  selectHideDone,
  fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {

  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <StyledButtons>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>

      {!areTaskEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>

          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTasksDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};

export default Buttons;
