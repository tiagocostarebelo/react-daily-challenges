import React from 'react'

const ColorBox = ({ color }) => {
    const isValidHex = /^#([A-Fa-f0-9]{3}){1,2}$/i.test(color);
    return (
        <div className="color-box-container">
            {isValidHex ?
                (<div className="color-box" style={{ backgroundColor: color }}></div>) :
                (color && <p className="error">Invalid Hex Code</p>)
            }
        </div>
    )
}

export default ColorBox