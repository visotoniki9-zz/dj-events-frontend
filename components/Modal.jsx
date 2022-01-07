import { XIcon } from '@heroicons/react/outline';
import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = function ({
  show, onClose, children, title,
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true));

  const modalContent = show ? (
    // Overlay
    <div
      id="overlay"
      onClick={(e) => { (e.target.id === 'overlay') && onClose(); }}
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center align-middle"
    >
      {/* Modal  */}
      <div className="bg-white w-4/5 sm:w-2/3 h-1/2 max-w-xl  rounded p-8 z-50 translate-y-1/2 ">
        {/* Header */}
        <div>
          <button
            type="button"
            className="w-8 float-right"
            onClick={() => onClose()}
          >
            <XIcon />
          </button>
        </div>
        {title && <div>{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  }
  return null;
};

export default Modal;
