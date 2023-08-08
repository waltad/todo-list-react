import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button";
import {
  fetchExampleTasks, selectLoading
} from "../../tasksSlice";

const ExamplesButton = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {
        loading
        ? "Ładuję przykładowe zadania ..."
        : "Pobierz przykładowe zadania"
      }
    </Button>
  );
};

export default ExamplesButton;
