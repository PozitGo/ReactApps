import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Мои Задачи</h1>
      <Todo text="Изучить React" />
      <Todo text="Идти нахуй" />
    </div>
  );
}

export default App;
