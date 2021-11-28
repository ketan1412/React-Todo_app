import React,{ useState } from 'react';
import Todo from './Todo';
import Todoform from './Todoform';

function TodoList(props) {
    const[todos,setTodos]=useState([]);

    const addTodo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos=[...todos,todo];
        setTodos(newTodos);
    }

    const updateTodo=(todoid,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(todos=>todos.map(item=>(item.id===todoid?{id:item.id,text:newValue.text}:item)))
    }

    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo=>todo.id!==id);
        setTodos(removeArr);
    }

    const completeTodo=id=>{
        let updatedTodos=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Todo List!!</h1>
            <Todoform onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    );
}

export default TodoList;