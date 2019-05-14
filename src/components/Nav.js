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
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Nav extends Component {

    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          name: "",
          password: ""
        };
     
        this.openModal = this.openModal.bind(this);
        //this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
     
    /*afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }*/
    
    closeModal() {
        this.setState({modalIsOpen: false});
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
                            <button onClick={this.openModal} className="login">Log In</button>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onAfterOpen={this.afterOpenModal}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className="login_field_parent">
                                    <TextField
                                        id="outlined-name"
                                        label="Username"
                                        className="login_field"
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        margin="normal"
                                        placeholder="Username"
                                        variant="outlined"
                                    />
                                </div>
                                <div className="password_field_parent">
                                    <TextField
                                        id="outlined-name"
                                        label="Password"
                                        className="password_field"
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        margin="normal"
                                        placeholder="Password"
                                        type="password"
                                        variant="outlined"
                                    />
                                </div>
                                <Button onClick={this.closeModal} variant="outlined" color="inherit" className="login_submit">
                                    Login
                                </Button>
                                
                            </Modal>
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

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

export default Nav;