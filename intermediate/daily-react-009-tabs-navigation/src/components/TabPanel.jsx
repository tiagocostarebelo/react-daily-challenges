import React from 'react'

const TabPanel = ({ activeTab }) => {
    if (!activeTab) return null;
    return (
        <p className={`content content-${activeTab.title}`}>{activeTab.content}</p>
    )
}

export default TabPanel