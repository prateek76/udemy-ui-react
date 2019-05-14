import React, { Component } from 'react';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ModalC extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.openModal} className="login">Log In</button>
                <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onLoginSubmit}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="login_field_parent">
                    <TextField
                        id="outlined-name"
                        label="Username"
                        className="login_field"
                        value={this.props.name}
                        onChange={this.props.handleChange('name')}
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
                        value={this.props.password}
                        onChange={this.props.handleChange('password')}
                        margin="normal"
                        placeholder="Password"
                        type="password"
                        variant="outlined"
                    />
                </div>
                <Button onClick={this.props.onLoginSubmit} variant="outlined" color="inherit" className="login_submit">
                    Login
                </Button>
                
            </Modal>
            </div>
        );
    }
}

ModalC.propTypes = {

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

export default ModalC;