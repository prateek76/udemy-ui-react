import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HorizontalRecommendation.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Books from '../books.json'
import ChevronLefty from '@material-ui/icons/ChevronLeft';
import ChevronRighty from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';


let list = [];

const MenuItem = ({text,pages,imageUrl,title,author,language,country,year,selected}) => {
    return <div className="menu-item">
        <div className="parent-card">
        <div className="image-parent">
            <img alt={title} className="image-hori" src={require("../"+imageUrl)} />
        </div>
        <div className="description">
            <div className="title">
                {title}
            </div>
            <div>
                {language}
            </div>
        </div>
        </div>
      </div>;
  };
   
  // All items component
  // Important! add unique key
  export const Menu = (list) =>
    Books.map(el => {
      const {title,author,country,language,year,pages,imageLink} = el;
   
      return <MenuItem title={title} text={author} country={country} year={year} language={language} imageUrl={imageLink} pages={pages} key={pages} />;
    });
  
  const ArrowLeft = <Fab color="#fff" aria-label="Add" className="arrow-prev"><ChevronLefty /></Fab>
  const ArrowRight = <Fab color="#fff" aria-label="Add" className="arrow-next"><ChevronRighty /></Fab>
     

class HorizontalRecommendation extends Component {

    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list);
        list =  this.props.boods;
        console.log(list);
      }

    render() {
        // Create menu from items
        const menu = this.menuItems;
        return (
            <div className="parent-cards">
                <div className="extra">
                    <div className="header">The world’s largest selection of courses</div>
                    <div className="data">Choose from over 100,000 online video courses with new additions published every month</div>
                </div>
                <div className="cards-hori">
                <ScrollMenu
                    dragging={false}
                    wheel={false}
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    hideSingleArrow={true}
                    alignCenter={false}
                />
                </div>
            </div>
        );
    }
}

HorizontalRecommendation.propTypes = {

};

export default HorizontalRecommendation;