import React from 'react';

const Accordion = ({ accordionData, onClick, isOpen }) => {


    return (
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title" onClick={onClick}>
                    <div>{accordionData.title}</div>
                    <div>+</div>
                </div>
                {isOpen && <div className="accordion-content">{accordionData.content}</div>}
            </div>
        </div>
    )
}

export default Accordion