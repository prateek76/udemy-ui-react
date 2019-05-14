import React, { Component } from 'react';
import './HorizontalRecommendation.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Books from '../books2.json';
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
     

class HorizontalSection2 extends Component {

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
            <div className="parent-cards2">
                <span className="head-hor2">Students are viewing</span>
                <div className="cards-hori2">
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

HorizontalSection2.propTypes = {

};

export default HorizontalSection2;