import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HorizontalRecommendation.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';

class HorizontalRecommendation extends Component {
    render() {
        return (
            <div className="parent-cards">
                <div className="cards-hori">
                    {this.props.Boods.map((book) => (
                        <div key={book.pages}>{book.title}</div>
                    ))}
                </div>
            </div>
        );
    }
}

HorizontalRecommendation.propTypes = {

};

export default HorizontalRecommendation;