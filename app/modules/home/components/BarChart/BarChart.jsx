import React from 'react';
import XAxis from './XAxis';
import YAxis from './YAxis';
import ChartContainer from './ChartContainer';
import './BarChart.less';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const {
            data,
            xAxisLabel,
            yAxisLabel
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
        const ticks = 4;
        const remainder = 10 - (maxValue % 10);
        const maxRange =  maxValue + remainder;

        return (
            <div className="chart-container">
                <div className="-chart-component bar-container">
                    <YAxis label={yAxisLabel} values={yAxisValues} ticks={ticks} maxRange={maxRange}/>
                    <ChartContainer data={data} ticks={ticks}/>
                </div>
                <div className="-chart-component">
                    <div className="-buffer"></div>
                    <XAxis label={xAxisLabel} values={xAxisValues} />
                </div>
            </div>
        );
    }
}

export default BarChart;