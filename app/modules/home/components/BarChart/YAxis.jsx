import React from 'react';

export default (props) => {
    const { label, values, ticks, maxRange } = props;
    const valuesLength = values.length;
    const highestValue = values.sort((a, b) => a - b)[valuesLength -1];
    
    const yValues = [];
    const division = highestValue / (ticks + 1);
    let part = division;
    while (part <= highestValue) {
        const prettyValue = part.toFixed(2);
        yValues.push(prettyValue);
        part += division;
    }

    
    return (
        <div className="-y-axis">
            <div className="-label">{label}</div>
            <div className="-value-container">
                {yValues.map((value, index) => {
                    return (
                        <div key={index} className="-element">
                            {`${value}`}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}