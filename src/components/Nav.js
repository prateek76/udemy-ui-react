import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';
import './Nav.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Apps from '@material-ui/icons/Apps';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="logo-cont">
                    <img className="logo" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" />
                </div>
                <ul className="Nav-Items">
                <Apps className="Items-text3" />
                <li className="Items-text2">
                    Categories
                </li>
                <div className="search-parent" >
                    <Paper elevation={1} style={{marginLeft: 80,padding: '0px 6px',display: 'flex',alignItems: 'center', width: 600, backgroundColor: '#f3f3f3'}}>
                        <InputBase style={{marginLeft: 8,flex: 1, fontSize: '13px', fontWeight: 400, color: '#29303b', backgroundColor: '#f3f3f3'}} placeholder="Search for anything" />
                        <IconButton style={{padding: '10px'}} aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                        <Divider />
                    </Paper>
                </div>
                </ul>
                <ul className="Nav-Items">
                    <li className="Items-text">
                        <div>Udemy for Business</div>
                    </li>
                    <li className="Items-text">
                        <div>Teach on Udemy</div>
                    </li>
                    <li>
                        <div className="cart-icon-container">
                            <ShoppingCart className="cart-icon" />
                        </div>
                    </li>
                    <li className="Items">
                        <div>
                            <button className="login">Log In</button>
                        </div>
                    </li>
                    <li className="Items">
                        <div>
                            <button className="sign-up">Sign Up</button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

Nav.propTypes = {

};

export default Nav;