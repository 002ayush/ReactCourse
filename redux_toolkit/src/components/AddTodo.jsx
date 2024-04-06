import { useEffect, useState } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { addTodo, setEdit, setEditInfo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const edit = useSelector(state=>state.edit)
  const editId = useSelector(state=>state.editId)
  const editVal = useSelector(state => state.editVal)
  
  const submit = (e) => {
    if (input.length > 0 && !edit){
        e.preventDefault();
        dispatch(addTodo(input));
      
        setInput("");
    }
    else if(input.length > 0 && edit){
      e.preventDefault();
      dispatch(updateTodo({id:editId,text:input}));
      dispatch(setEdit());
      setInput("");
    }
  };
  useEffect(()=>{
    edit ? setInput(editVal) :
    setInput("");
  },[edit])
  return (
    <>
      <form onSubmit={submit} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg `} 
        >
          {!edit ? "Add Todo" : "Update Todo" }
          
        </button>
      </form>
    </>
  );
}

export default AddTodo;
