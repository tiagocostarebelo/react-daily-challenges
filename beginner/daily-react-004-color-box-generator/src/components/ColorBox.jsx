import React from 'react'

const ColorBox = ({ color }) => {
    return (
        <div>
            {color && <div className="color-box" style={{ backgroundColor: color }}>

            </div>}
        </div>
    )
}

export default ColorBox