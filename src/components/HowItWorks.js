import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HowItWorks.css';
import Icon1 from '@material-ui/icons/PortableWifiOff';
import Icon2 from '@material-ui/icons/Duo';
import Icon3 from '@material-ui/icons/Update';

class HowItWorks extends Component {
    render() {
        return (
            <div className="HowItWorks">
                <div className="info">
                    <div className="info-in">
                        <span className="info-icon">
                            <Icon1 style={{fontSize: '47px'}} />
                        </span>
                        <div className="info-text">
                            <b>100,000 online courses</b>
                            <div className="subtitle">
                                Explore a variety of fresh topics
                            </div>
                        </div>
                    </div>
                    <div className="info-in">
                        <span className="info-icon">
                            <Icon2 style={{fontSize: '47px'}} />
                        </span>
                        <div className="info-text">
                            <b>Expert instruction</b>
                            <div className="subtitle">
                                Find the right instructor for you
                            </div>
                        </div>
                    </div>
                    <div className="info-in">
                        <span className="info-icon">
                            <Icon3 style={{fontSize: '47px'}} />
                        </span>
                        <div className="info-text">
                            <b>Lifetime access</b>
                            <div className="subtitle">
                                Learn on your schedule
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HowItWorks.propTypes = {

};

export default HowItWorks;