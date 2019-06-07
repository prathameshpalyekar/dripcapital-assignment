import React from 'react';
// import Stock from './stock/stock';
import BarChart from './BarChart/BarChart';
// const BarChart = require('bar-chart-plugin');
import './home.less';

const Home = (props) => {
    const dataSet = [{
        A: 10
    }, {
        B: 50
    }, {
        C: 30,
    }, {
        D: 80
    }, {
        E: 75
    }, {
        F: 97
    }];
    const xAxisLabel = 'Cars';
    const yAxisLabel = 'Profit';
    return (
        <div className="home-dashboard">
            <BarChart data={dataSet} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} />
        </div>
    );
}

export default Home;
