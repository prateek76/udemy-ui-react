import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="./image.jpg" />
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;