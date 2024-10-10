"use client";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { addTodo, removeTodo } from './store';

const Page: React.FC = () => {
  const [inputTodo, setInputTodo] = useState('');
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputTodo.trim()) {
      dispatch(addTodo(inputTodo));
      setInputTodo('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleRemoveTodo(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Page;