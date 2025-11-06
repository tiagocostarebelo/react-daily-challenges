import React from 'react'

const ColorDisplay = ({ rgbValue }) => {
    console.log(rgbValue)
    return (
        typeof rgbValue[0] === 'undefined' || typeof rgbValue[0] === 'NaN' ?
            (<></>) :
            (<div>
                <div className="color-display">
                    <span className="color-display__title">RGB</span>
                    <span className="color-display__value">{`(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`}</span>

                </div>
            </div>)
    )
}

export default ColorDisplay