import React from 'react';
import { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title" onClick={handleClick}>
                    <div>{title}</div>
                    <div>{isOpen ? '-' : '+'}</div>
                </div>
                {isOpen && <div className="accordion-content">{content}</div>}
            </div>
        </div>
    )
}

export default Accordion