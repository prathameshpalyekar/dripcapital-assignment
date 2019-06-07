import React from 'react';

export default (props) => {
    const { label, values } = props;
    return (
        <div className="-x-axis">
        	<div className="-value-container">
                {values.map((value, index) => {
                    return (
                        <div key={index} className="-element">
                            {value}
                        </div>
                    )
                })}
            </div>
            <div className="-label">{label}</div>
        </div>
    );
}