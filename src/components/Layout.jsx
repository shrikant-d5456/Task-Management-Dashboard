import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { BsClipboardDataFill, BsGrid1X2Fill, BsBell, BsJournalText, BsX, BsList } from "react-icons/bs";
import Dashboard from './Dashboard';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import NotFoundPage from '../NotFoundPage';

const Layout = () => {

    const path = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const icons = {
        BsGrid1X2Fill: BsGrid1X2Fill,
        BsClipboardDataFill: BsClipboardDataFill,
        BsJournalText: BsJournalText,
    };

    const arr = [
        {
            path_icon: "BsGrid1X2Fill",
            path_name: "Dashboard",
            path_link: "/",
        },
        {
            path_icon: "BsJournalText",
            path_name: "Add Task",
            path_link: "/task-form",
        },
        {
            path_icon: "BsClipboardDataFill",
            path_name: "Filter Your Task",
            path_link: "/task-filter",
        },
        {
            path_icon: "BsJournalText",
            path_name: "Task List",
            path_link: "/task-list",
        },
    ];

    return (
        <main className='lg:flex w-full h-screen lg:px-8'>
            {/* Sidebar */}
            <div className='lg:block hidden w-[19rem] h-screen bg-secondary p-4'>
                <h2 className='text-white text-xl font-bold mb-4'>Task Management App</h2>
                <ul >
                    {arr.map((element, index) => (
                        <li key={index} className='p-1'>
                            <Link 
                            to={element.path_link} 
                            className={`flex items-center gap-2 py-2 px-3 rounded-md text-white font-bold hover:bg-slate-700 transition duration-300
                            ${path === element.path_link ? 'bg-slate-700 ' : ''}`}
                            >
                                {icons[element.path_icon] && React.createElement(icons[element.path_icon], { className: 'icon-class' })}
                                <span>{element.path_name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:hidden bg-[#0099ff] py-2">
                <button onClick={toggleMenu} className="text-gray-100 focus:outline-none focus:text-white flex gap-2">
                    {isOpen ? <BsX className="h-6 w-6" /> : <BsList className="h-6 w-6" />} Task Mangment App
                </button>
                {isOpen && (

                    <div className="lg:hidden mt-2 absolute bg-[#0099ff] w-full border-t-2 transition-all z-20">
                        <Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Dashboard</Link>
                        <Link to="/task-form" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Add Task</Link>
                        <Link to="/task-filter" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Filter Your Task</Link>
                        <Link to="/task-list" onClick={toggleMenu} className="block px-4 py-2 text-gray-100 hover:text-white">Task List</Link>
                    </div>

                )}
            </div>


            {/* Content */}
            <div className='w-full flex-1 p-4 overflow-y-auto'>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/task-form" element={<TaskForm />} />
                    <Route path="/task-filter" element={<TaskFilter />} />
                    <Route path="/task-list" element={<TaskList />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </main>
    );
};

export default Layout;
