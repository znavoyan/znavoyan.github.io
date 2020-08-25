import React from 'react';

const Tooltip = (props) => {

    const tooltipText = props.tooltipText;
    return (
        <div className="tooltip">
            <p className="tooltip-text">{tooltipText}</p>
        </div>
    )
};

export default Tooltip;