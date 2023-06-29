import { useDispatch, useSelector } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTaskEmpty, selectIsEveryTasksDone, selectHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {

  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
  const hideDone = useSelector(selectHideDone);
  
  const dispatch = useDispatch();

  return (
    <>
      {!areTaskEmpty && (
        <StyledButtons>

          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>

          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTasksDone}
          >
            Ukończ wszystkie
          </Button>

        </StyledButtons>
      )}
    </>
  );
};

export default Buttons;
