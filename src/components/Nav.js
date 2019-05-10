import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ul className="Nav-Items">
                    <li className="Items">First</li>
                    <li className="Items">Second</li>
                    <li className="Items">Third</li>
                </ul>
            </div>
        );
    }
}

Nav.propTypes = {

};

export default Nav;