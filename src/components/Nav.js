import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import './Nav.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Apps from '@material-ui/icons/Apps';
import ModalC from './ModalC';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import Data from '../books.json';

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('\\b' + escapedValue, 'i');
    
    return Data.filter(person => regex.test(getSuggestionValue(person)));
  }
  
  function getSuggestionValue(suggestion) {
    return `${suggestion.author} ${suggestion.language}`;
  }
  
  function renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.author} ${suggestion.language}`;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);

    return (
      <span className={'suggestion-content'}>
        <img className="image-sugg" src={require(`../`+suggestion.imageLink)} alt="suggestion"/>
        <span className="name">
          {
            parts.map((part, index) => {
              const className = part.highlight ? 'highlight' : null;
  
              return (
                <span className={className} key={index}>{part.text}</span>
              );
            })
          }
        </span>
      </span>
    );
  }


  

class Nav extends Component {

    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          name: "",
          password: "",
          value: '',
          suggestions: []
        };
     
        this.openModal = this.openModal.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
          value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
    };
    
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
    };
    

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
            alert("loggedIn with Jwt Token"+ response.data.jwt);
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
        const { value, suggestions } = this.state;
        const inputProps = {
        placeholder: "Search for anything",
        value,
        onChange: this.onChange
        };

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
                    <Paper elevation={0} style={{marginLeft: 80,padding: '0px 6px',display: 'flex',alignItems: 'center', width: 600}}>
                    <Autosuggest 
                        style={{width: '100%'}}
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps} 
                    />
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