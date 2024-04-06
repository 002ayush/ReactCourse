import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setEditInfo,setEdit,setEditValue } from "../features/todo/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            
            <div className="text-white">{todo.text}</div>
            <div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-700 text-3xl fill-red-600 py-1 px-4  focus:outline-none rounded text-md"
            >
              &#x2715;
            </button>
            <button onClick={() => {
                dispatch(setEditInfo(todo.id));
                dispatch(setEditValue(todo.text));
                dispatch(setEdit());}
            }>
              &#10000;
            </button></div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
