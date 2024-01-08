import React, { useState } from 'react'
import TodoItem from './TodoItem';

function TodoWrapper() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    
    const onAdd =()=> {
        setValue("");
    //    const newList = list;
    //    newList.push(value);
     setList([...list,value]);//both method works kinda.... first one is for javascript vanilla 
    };
    const onDelete = (item) => {
        const newList = list.filter((todo)=> todo !==item);
        setList(newList);
    };
    const onEdit = (index) => {
        setEditIndex(index);
    };
    const onDone =(item, index)=>{
        const newList = list.map((value, i)=>{
            if (index ===i) {
                return item;
                }
                return value;                
            
        })
        setList(newList);
        setEditIndex(null)


    }
    
  return ( 
    <div className="min-h-screen bg-indigo-600 flex justify-center items-center ">
        <div className="w-1/3 p-4 text-white bg-indigo-950 rounded-xl">
            <div className="mb-2 text-2xl text-center">Get Things Done</div>
            <div className="flex">
                <input type="text" className="w-full h-10 p-1 text-black" placeholder="what is your task today?" value={value}
                onChange={(event) => {
                   setValue(event.target.value);
                }}
                />
                <button className="w-32 h-10 p-1 px-2 bg-indigo-600 rounded-none"onClick={onAdd}>Add Item</button>
            </div>
            <div>{list.map((item, index)=>( <TodoItem
             key={index}
             item={item}
              index={index} 
              onDelete={onDelete}
               onEdit={onEdit}
                onDone={onDone}
                 isEditMode={editIndex === index}/>
           ))}
            </div>
        </div>
    </div>
  )
}

export default TodoWrapper