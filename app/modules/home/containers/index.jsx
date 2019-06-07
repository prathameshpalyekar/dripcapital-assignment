import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { Layout, data } = this.props;
        return (
            <div>
                <Layout />
            </div>
        );
    };
}

export default Home;
