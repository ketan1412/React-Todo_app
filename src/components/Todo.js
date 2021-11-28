import React,{ useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Todoform from './Todoform';

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })

    const submitUpdate=value=>{
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:''
        });
    }
    // if(edit.id){
    //    return <Todoform edit={edit} onSubmit={submitUpdate} />
    // }
    // return todos.map((todo,index)=> (
    //     <div key={index} 
    //     className={todo.isComplete?'todo-row complete':'todo-row'}>
    //         <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
    //             {todo.id} {todo.text}
    //         </div>
    //         <div className='icons'>
    //             <RiCloseCircleLine onClick={()=>removeTodo(todo.id)}
    //             className='delete-icon'/>
    //             <TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})}/>
    //         </div>
    //     </div>
    // ))
    return todos.map((todo,index)=>{
        if(edit.id===todo.id) return(<Todoform edit={edit} onSubmit={submitUpdate} />)
        else
        return(
            <div key={index} 
            className={todo.isComplete?'todo-row complete':'todo-row'}>
                <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine onClick={()=>removeTodo(todo.id)}
                    className='delete-icon'/>
                    <TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})}/>
                </div>
            </div>
        )
    })
}

export default Todo;