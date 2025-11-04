import React from 'react'

const Button = ({ onClick, isSwitched }) => {
    return (
        <button
            onClick={onClick}
            className={isSwitched ? "" : "light"}
        >{isSwitched ? "Switch Off" : "Switch On"}</button>
    )
}

export default Button