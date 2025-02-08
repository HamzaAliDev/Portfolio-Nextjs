import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg lg:w-8/12 md:w-8/12 sm:w-10/12 w-10/12  p-6" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            className="text-gray-400 hover:text-gray-600 text-3xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;
