import React, { useState, useEffect, useRef } from 'react';
let i=0;
function Todoform(props) {
    
    const [input,setInput]=useState(props.edit ? props.edit.value : '');
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })
    const handleSubmit=e=>{
        e.preventDefault();

        props.onSubmit({
            id:++i,
            text:input
        })
        setInput('');

    }
    const handleChange=e=>{
        setInput(e.target.value);
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
        </form>
    );
}

export default Todoform;