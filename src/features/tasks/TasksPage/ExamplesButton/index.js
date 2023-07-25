import { useDispatch } from "react-redux";
import Button from "../../Button";
import {
  fetchExampleTasks
} from "../../tasksSlice";

const ExamplesButton = () => {

  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
};

export default ExamplesButton;
