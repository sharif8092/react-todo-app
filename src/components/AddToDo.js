import "../todo/todo.css"
function AddToDo(props){
    return(
        <div>
            <input className="input-todo" 
            value={props.todoItems} 
            onChange={(e)=>props.setTodoItems(e.target.value)}
            />
            <button className="Add-btn" 
            onClick={props.addTodo}
             > Add </button>
        </div>
    )
 }
 export default AddToDo