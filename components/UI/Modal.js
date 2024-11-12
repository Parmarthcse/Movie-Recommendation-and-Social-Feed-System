// components/UI/Modal.js
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Dynamically add the Tagembed script when the modal opens
    if (isOpen) {
      const script = document.createElement('script');
      script.src = "https://widget.tagembed.com/embed.min.js";
      script.type = "text/javascript";
      document.body.appendChild(script);

      // Cleanup the script when modal closes or component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <button onClick={onClose} style={closeButtonStyles}>X</button>
        {children}
      </div>
    </div>
  );
};

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  width: '90%',
  position: 'relative',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  fontSize: '18px',
};

export default Modal;
