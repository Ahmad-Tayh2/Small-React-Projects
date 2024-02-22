import React, { useEffect, useState } from "react";

function App() {
  // Check local storage for initial values
  const initialTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const initialFinishedItems = JSON.parse(localStorage.getItem('finishedItems')) || [];


  const [todoList, setTodoList] = useState(initialTodoList);
  const [todoVal, setTodoVal] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [finishedItems, setFinishedItems] = useState(initialFinishedItems);

  const isEditing = editIndex !== null;
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    localStorage.setItem('finishedItems', JSON.stringify(finishedItems));
  }, [todoList, finishedItems]);
  
  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    const storedFinishedItems = JSON.parse(localStorage.getItem('finishedItems'));
  
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  
    if (storedFinishedItems) {
      setFinishedItems(storedFinishedItems);
    }
  }, []);


  const addItemToArray = () => {
    if (isEditing) {
      const updatedTodoList = [...todoList];
      updatedTodoList[editIndex] = todoVal;
      setTodoList(updatedTodoList);
      setTodoVal('');
      setEditIndex(null);
    } else {
      if (todoVal.trim() !== '') {
        setTodoList((prevTodo) => [...prevTodo, todoVal]);
        setTodoVal('');
      }
    }
  };

  const removeItem = (index) => {
    setTodoList((prevTodo) => prevTodo.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setEditIndex(index);
    setTodoVal(todoList[index]);
  };

  const finishItem = (index) => {
    setFinishedItems((prevFinishedItems) => {
      const updatedFinishedItems = [...prevFinishedItems];
      updatedFinishedItems[index] = !prevFinishedItems[index];
      return updatedFinishedItems;
    });
  };

  const deleteAll = () => {
    setTodoList([]);
    setFinishedItems([])
  }


  return (
    <div className="App">
      <input
        type="text"
        placeholder="ToDo"
        value={todoVal}
        onChange={(e) => setTodoVal(e.target.value)}
      />

      <button onClick={addItemToArray}>
        {isEditing ? 'Edit' : 'Add Item'}
      </button>

      <button onClick={deleteAll}>
        Delete All
      </button>

      <ul>
        {todoList.map((todoItem, index) => (
          <li
            key={index}
            style={{ textDecoration: finishedItems[index] ? 'line-through' : 'none' }}
          >
            <input
              type="checkbox"
              checked={finishedItems[index]}
              onChange={() => finishItem(index)}
            />
            {todoItem}
            <button onClick={() => removeItem(index)}>X</button>
            <button onClick={() => editItem(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;