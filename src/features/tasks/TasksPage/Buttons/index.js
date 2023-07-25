import { useDispatch, useSelector } from "react-redux";
import { StyledButtons } from "./styled";
import Button from "../../Button";
import {
  toggleHideDone,
  setAllDone,
  selectAreTaskEmpty,
  selectIsEveryTasksDone,
  selectHideDone,
} from "../../tasksSlice";

const Buttons = () => {

  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <StyledButtons>
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
