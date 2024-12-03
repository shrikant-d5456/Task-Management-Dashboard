import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, dueDate }));
    alert("task Added");
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className=' lg:w-1/2 m-auto p-8 bg-gradient-to-br from-blue-400 to-purple-700'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <p className=' text-heading '>Add Task</p> <hr /> 
      <div>
        <label className='text-sub-heading'>Title : </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='text-sub-heading'>Description : </label>
        <textarea
         className=' w-full p-2 text-black text-sm'
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='text-sub-heading'>Due Date : </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button className='border-[1px] border-white shadow-xl' type="submit">Add Task</button>
    </form>
    </div>
  );
};

export default TaskForm;