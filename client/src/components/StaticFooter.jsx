
import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from './actions';
import './App.css';

// change props to state

export default class StaticFooter extends React.Component {
    render() {
        return (
          <footer>
                <img onClick={this.props.changePage} id="b1" className="NavButton" src="../assets/images/logit.png" width="100px" height="100px" alt="LogIt" />
                <img onClick={this.props.changePage} id="b2" className="NavButton" src="../assets/images/history.png" width="100px" height="100px" alt="Workout History" />
                <img onClick={this.props.changePage} id="b3" className="NavButton" src="../assets/images/charts.png" width="100px" height="100px" alt="Charts & Stats" />
                <img onClick={this.props.changePage} id="b4" className="NavButton" src="../assets/images/logout.png" width="100px" height="100px" alt="Log Out" />
          </footer>
        );
    }
}
