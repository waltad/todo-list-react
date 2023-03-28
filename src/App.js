import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  {id: 1, content: "Go to the cinema", done: false},
  {id: 2, content: "Walk the dog", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
    <h1>Lista zadań</h1>
    <section className="section">
      <h2 className="section__title">Dodaj nowe zadanie</h2>

      <div className="section__body">
        <Form />
      </div>
    </section>

    <section className="section">
      <header className="section__header">
        <h2 className="section__title">Lista zadań</h2>
        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>
      </header>
      <div className="section__body">
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
      </div>
    </section>
  </main>
  );
}

export default App;
