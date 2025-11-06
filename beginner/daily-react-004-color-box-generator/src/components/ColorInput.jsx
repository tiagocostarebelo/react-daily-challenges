import React from 'react'

const ColorInput = ({ value, onChange }) => {
    return (
        <form >
            <label htmlFor="hexInput">HEX</label>
            <input
                type="text"
                id="hexInput"
                name="hex"
                value={value}
                onChange={onChange}
                placeholder='Enter your hex code (e.g. #3498db)'
                required
            />
        </form>
    )
}

export default ColorInput