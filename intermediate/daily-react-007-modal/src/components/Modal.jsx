import React from 'react'

const Modal = ({ onClick }) => {
    return (
        <><div className="backdrop" onClick={onClick}></div>
            <div className="dialog">
                <h2>Modal Open</h2>
                <p>
                    Closable using the "Close" button, the Esc key, or by clicking outside the
                    dialog. "Light dismiss" behavior.
                </p>
                <button onClick={onClick}>Close</button>
            </div>
        </>
    )
}

export default Modal