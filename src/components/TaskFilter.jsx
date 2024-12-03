import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTasks } from '../redux/action';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.filteredTasks || []);
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks || []); 
  const [filter, setFilter] = useState("all");


  useEffect(() => {
    dispatch(filterTasks('all'));
  }, [dispatch]);

  const handleFilterChange = (filter) => {
    dispatch(filterTasks(filter));
    setFilter(filter);
  };
  // console.log(filteredTasks);
  // console.log(tasks);

  return (
    <main className=' w-full'>

      <div className=' w-full flex justify-between shadow-sm  shadow-slate-500'>
        <button className={` w-full flex justify-center hover:bg-secondary py-2 ${filter === "all" ? "bg-secondary":"" }`} onClick={() => handleFilterChange('all')}>All</button>
        <button className={` w-full flex justify-center hover:bg-secondary py-2 ${filter === "completed" ? "bg-secondary":"" }`} onClick={() => handleFilterChange('completed')}>Completed</button>
        <button className={` w-full flex justify-center hover:bg-secondary py-2 ${filter === "pending" ? "bg-secondary":"" }`} onClick={() => handleFilterChange('pending')}>Pending</button>
        <button className={` w-full flex justify-center hover:bg-secondary py-2 ${filter === "overdue" ? "bg-secondary":"" }`} onClick={() => handleFilterChange('overdue')}>Overdue</button>
      </div>

      <div className=" w-full">
        {tasks.length > 0 ? (
          <table className="w-full divide-gray-200 my-4">
            <thead className=" bg-primary">
              <tr>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className=" w-full">
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{task.dueDate}</td> </tr>))}
            </tbody>
          </table>)
          :
          (<p>No tasks found.</p>)}

      </div>
    </main>
  );
};

export default TaskFilter;