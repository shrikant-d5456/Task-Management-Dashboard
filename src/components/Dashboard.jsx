import React from 'react';
import { BsChatDots, BsChatDotsFill, BsCheckAll, BsGlobeAmericas, BsListTask } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {

  const tasks = useSelector((state) => state.tasks);
  const completed = tasks.filter((task) => task.completed === true);
  // console.log(completed.length);

  const pending = tasks.filter((task) => task.completed === false);
  // console.log(pending);

  const overdue = tasks.filter((task) => !task.completed && new Date(task.dueDate) < new Date());
  // console.log(overdue);



  return (
    <main className=' flex flex-col'>
      <div className='border-r-2  border-white'>
        <p className='md:float-right float-left  my-2 px-4 animate-bounce'>Hello, Welcome to task managment App</p>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-4 my-4'>
        <div className=' md:w-[23%] w-full flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-blue-300 to-blue-800'>
          <div>
          <p className=' text-heading'>All</p>
          <p className=' text-heading'>{tasks.length}</p>
          </div>
          <div className=' flex justify-center items-center text-4xl'>
            <BsListTask/>
          </div>
        </div>

        <div className=' md:w-[23%] w-full flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-teal-400 to-lime-500'>
          <div>
          <p className=' text-heading'>Completed</p>
          <p className=' text-heading'>{completed.length}</p>
          </div>
          <div className=' flex justify-center items-center text-4xl'>
            <BsCheckAll/>
          </div>
        </div>

        <div className=' md:w-[23%] w-full flex justify-between items-center p-4 rounded-xl bg-gradient-to-tl from-amber-500 to-yellow-400'>
          <div>
          <p className=' text-heading'>Pending</p>
          <p className=' text-heading'>{pending.length}</p>
          </div>
          <div className=' flex justify-center items-center text-4xl'>
            <BsChatDotsFill/>
          </div>
        </div>

        <div className=' md:w-[23%] w-full flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500'>
          <div>
          <p className=' text-heading'>Overdue</p>
          <p className=' text-heading'>{overdue.length}</p>
          </div>
          <div className=' flex justify-center items-center text-4xl'>
            <BsChatDots/>
          </div>
        </div>

      </div>

      <div className=' w-full flex flex-wrap text-color gap-4 '>
        <div className=' md:w-[49%] flex w-full p-4 bg-secondary rounded-xl shadow-md bg-gradient-to-br from-blue-400 to-purple-700'>
          <div className=' w-full'>
            <p className=' text-heading'>Website Analysis</p>
            <p className='text-sub-heading'>Task Overview</p> <hr className=' my-4' />
            <div className='flex justify-between gap-8'>
              <div>Tatal Task : {tasks.length}</div>
              <div>Pending : {pending.length}</div>
            </div>
            <div className='flex justify-between'>
              <div>Completed : {completed.length}</div>

              <div>Overdue : {overdue.length}</div>
            </div>
          </div>

          <div className=' w-2/4 flex justify-center items-center'>
            <BsGlobeAmericas className=' text-8xl' />
          </div>

        </div>

        <div className=' md:w-[49%] flex w-full p-4 bg-secondary rounded-xl shadow-md bg-gradient-to-br from-blue-400 to-purple-700'>
          <div className=' w-full'>
            <p className=' text-heading'>Website Analysis</p>
            <p className='text-sub-heading'>Task Overview</p> <hr className=' my-4' />
            <div className='flex justify-between gap-8'>
              <div>Tatal Task:</div>
              <div>Completed:</div>
            </div>
            <div className='flex justify-between'>
              <div>Tatal Task:</div>
              <div>Completed:</div>
            </div>
          </div>

          <div className=' w-2/4 flex justify-center items-center'>
            <BsGlobeAmericas className=' text-8xl' />
          </div>

        </div>


      </div>
    </main>
  );
};

export default Dashboard;