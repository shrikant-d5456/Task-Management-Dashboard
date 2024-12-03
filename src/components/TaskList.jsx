import React, { useState } from 'react';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, markTaskComplete } from '../redux/action';
import Modal from './Modal';
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const handleDeleteClick = (id) => {
    setTaskIdToDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteTask(taskIdToDelete));
    setShowModal(false);
  };

  const handleComplete = (id) => {
    dispatch(markTaskComplete(id));
    alert("Task mark as completed")
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="mb-4 p-2 bg-secondary text-white border border-gray-300 rounded outline-none"
      />

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => handleDeleteClick(task.id)}
            onComplete={() => handleComplete(task.id)}
          />
        ))
      ) : (
        <p>No tasks found.</p>
      )}

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default TaskList;
