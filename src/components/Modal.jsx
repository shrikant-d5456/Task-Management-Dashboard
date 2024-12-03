import React from 'react';

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <main className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-sm w-full text-black">
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this task?</p>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    </main>
  );
};

export default Modal;
