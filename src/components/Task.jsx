import React from 'react';

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <main>
      {task && 
      
      <div className="overflow-x-auto my-4">
  <table className="table-auto bg-secondary text-white w-full border-collapse border border-gray-700">
    <thead>
      <tr className="bg-gray-800">
        <th className="px-4 py-2 text-left">Field</th>
        <th className="px-4 py-2 text-left">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border border-gray-700 text-sub-heading tracking-wide">Title</td>
        <td className="px-4 py-2 border border-gray-700">{task?.title}</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-700 text-sub-heading tracking-wide">Description</td>
        <td className="px-4 py-2 border border-gray-700">{task?.description}</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border border-gray-700 text-sub-heading tracking-wider">Due Date</td>
        <td className="px-4 py-2 border border-gray-700">{task?.dueDate}</td>
      </tr>
    </tbody>
  </table>
  <div className="flex gap-4 mt-4">
    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => onDelete(task?.id)}>Delete</button>
    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => onComplete(task?.id)}>
      {task?.completed ? "Completed" : "Mark as Completed"}
    </button>
  </div>
</div>

      }
    </main>
  );
};

export default Task;