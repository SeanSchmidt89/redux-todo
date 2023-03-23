import Form from "./components/Form/Form";
import SavedList from "./components/SavedList/SavedList";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <div className="App">
      <h1>Redux Todo Pratice</h1>
      <Form />
      <SavedList />
      <TodoList />
    </div>
  );
}

export default App;
