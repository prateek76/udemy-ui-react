import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageBanner from './image.jpg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img style={{width: '100%'}} alt="banner" src={ImageBanner} />
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;