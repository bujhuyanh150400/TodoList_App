import "./App.scss";
import Filters from "./Components/Filters";
import TodoList from "./Components/TodoList";
const App = () => {
  return (
    <div className="AppTodo w-screen h-screen bg-orange inset-0 relative flex flex-col justify-center items-center">
      <div
        className="h-[90%] w-[600px] z-20 relative p-4 backdrop-blur-md bg-white/50 rounded-xl
                      border-t-2 border-l-2 shadow-xl border-stone-100 flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold text-center">TodoList App</h1>
        <TodoList />
        <div className="absolute z-10 top-6 -right-2/4 p-4 w-1/2 bg-white/50 backdrop-blur-md rounded-r-md border-t border-r border- b shadow-xl border-stone-100">
          <h1 className="text-lg font-bold text-center">Filters</h1>
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default App;
