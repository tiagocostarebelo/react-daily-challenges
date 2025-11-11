import React from 'react'
import { useEffect } from 'react'

const Modal = ({ onClose, children }) => {

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <>
            <div className="backdrop" onClick={onClose}></div>
            <div className="dialog">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </>
    )
}

export default Modal