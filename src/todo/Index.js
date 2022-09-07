import "./todo.css";
import Header from "../components/Header";
import data from "../data/data.json";
import {useState} from "react";
import Todo from "./Todolist"
import AddToDo from "../components/AddToDo";
function Index(){

    const[todo , setTodo] = useState(data);
    const[todoItems, setTodoItems] = useState('');

    //------
    const togglecomplt = (id)=>{
        console.log(`id is ${id}`);
      const newtoDo =  todo.map((task,index)=>{
          if(task.id===id){
            task.completed = !task.completed;
          }
          
          return task;
        });

        //-----------
        
        setTodo(newtoDo);

        console.log(newtoDo);
        
        
        }

        //---------
       const deleteTodo = (id)=>{
         console.log(`delete this todo ${id}`);
        const newtoDo= todo.filter((task,index)=>{
          if(task.id !== id){
            return task;
          }
         });
        setTodo(newtoDo);
       }

       //--------

const addTodo = () => {
   const newtoDoItem = {
    id : todo.length +1 ,
    task : todoItems ,
    completed : false,


   };
    setTodo([...todo , newtoDoItem])
       }
    
    return( 
   
        <div className="container">
        < Header />

        <AddToDo 
         todoItems={todoItems}
         setTodoItems={setTodoItems}
         addTodo={addTodo}
        />

        < Todo
        todo={todo} 
        togglecomplt={togglecomplt}
         deleteTodo={deleteTodo}
         />
    </div>
    
     
    )
}
export default Index;