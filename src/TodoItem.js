import React, { useState } from 'react'
import TodoWrapper from './TodoWrapper';
function TodoItem(props) { 
    const [value, setValue] = useState(props.item);
  return props.isEditMode?(
  <span>
     <input type="text" className="w-full h-10 p-1 text-black" placeholder="what is your task today?" value={value} onChange={(event) => {setValue(event.target.value);}}/>
     <button className="w-32 h-10 p-1 px-2 bg-indigo-600 rounded-none"onClick={() => props.onDone(value, props.index)}>Done</button>
     
  </span>
  ):(   <span className="flex">{props.item}
    <button onClick={() => props.onEdit(props.index)} className='pl-4'>Edit</button>
            <button onClick={()=>props.onDelete(props.item)}
            className="pl-4">delete</button>
            </span>
  )
}

export default TodoItem