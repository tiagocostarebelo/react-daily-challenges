import React from 'react'

const Button = ({ children, onClick, variant = 'clear', type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            className={`${variant}-button`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button