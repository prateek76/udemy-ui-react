import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ul className="Nav-Items">
                <div className="search-parent">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    />
                </div>
                    <li className="Items">
                        <Button variant="outlined" size="large" className="login">Login</Button>
                    </li>
                    <li className="Items">
                    <Button variant="contained" size="large" color="primary" className="sign-up">Large</Button>
                    </li>
                </ul>
            </div>
        );
    }
}

Nav.propTypes = {

};

export default Nav;