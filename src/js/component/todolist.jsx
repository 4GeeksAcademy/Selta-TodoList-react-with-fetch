import React, {useState} from "react";



const TodoList = () => {
    const [todos, setTodos] = useState ([]);
    const [inputValue, setInputValue] = useState ('');

    function handleChange(e){
        setInputValue(e.target.value)
      }
      
      function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }
    function handleDelete(index){
        const newTodos = todos.filter ((e, filterIndex)=> {
        return filterIndex !== index 
        })
        
        setTodos(newTodos)
      }


    return (
        <div className="container text-center col-3">
            <form>
                <h3 className="title pb-2" >Your Todo List</h3>
                    <input type="text" value={inputValue} onChange={handleChange} />
                    <button onClick={handleSubmit}>Add Todo </button>
                    <ul>
                        {todos.map((todo, index) => (
                        <li key={todo}>{todo}
                            <button onClick={() =>handleDelete(index)}>x</button>
                        </li>
        ))}
                    </ul>
            </form>
        </div>
    )
}

export default TodoList;
