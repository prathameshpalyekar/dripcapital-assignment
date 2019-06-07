import React from 'react';
import ReactTooltip from 'react-tooltip'

class ChartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const {
            data,
        } = this.props;
        const xAxisValues = [];
        const yAxisValues = [];
        let maxValue = 0;
        data.forEach((value) => {
            const xValue = Object.keys(value)[0];
            const yValue = value[xValue];
            xAxisValues.push(xValue);
            yAxisValues.push(yValue);
            if (yValue > maxValue) {
                maxValue = yValue;
            }
        });

        return (
            <div className="-data-component">
                {yAxisValues.map((value, index) => {
                    return (
                        <div className="-bar" key={index}>
                            <Bar value={value} maxValue={maxValue}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

class Bar extends React.Component {
    render() {
        const { value, maxValue } = this.props;
        const height = (value / maxValue * 100) + '%';

        return (
            <div className="-bar-item" style={{height}} data-tip={value}>
                <div>
                    
                </div>
                <ReactTooltip />
            </div>
        );
    }
}

export default ChartContainer;