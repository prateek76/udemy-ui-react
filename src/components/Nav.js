import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';
import './Nav.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Apps from '@material-ui/icons/Apps';
import ModalC from './ModalC';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Nav extends Component {

    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          name: "",
          password: ""
        };
     
        this.openModal = this.openModal.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    
    onLoginSubmit = () => {
        //request
        axios
        .post('http://localhost:1337/auth/local', {
            identifier: this.state.name,
            password: this.state.password
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error);
        });
        this.setState({name: "", password: "", modalIsOpen: false});
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

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
                            <ModalC isOpen={this.state.modalIsOpen} loginId={this.state.name} loginPass={this.state.password} openModal={this.openModal} onLoginSubmit={this.onLoginSubmit} handleChange={this.handleChange} />
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