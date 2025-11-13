import React from 'react'

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button className={`tab tab-${isActive} ${isActive ? "active" : ""}`} onClick={onClick} role="tab" aria-selected={isActive} tabIndex={isActive ? 0 : -1}>{title}</button>
    )
}

export default Tab