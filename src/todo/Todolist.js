import "./todo.css";
// import data from "../data/data.json";
// import {useState} from "react";
function Todolist(props){

    
    return( 
        <div className="task-container"  >
       {
        props.todo.map((data,index)=>{
         return <div className="task" key={data.id} >
          
          <p className={data.completed ? 'completed' : 'not-completed'} onClick ={()=> props.togglecomplt(data.id)}  >
            {data.task}
            
           </p> 
           <span onClick={() => props.deleteTodo(data.id)}  > Delete </span>



          
          
          </div>
           
           
        })
        }

        
        </div>
    )
}
export default Todolist;