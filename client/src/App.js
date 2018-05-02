import React, { Component } from 'react';
import logo from './logo.svg';
import LogForm from './components/LogForm';
import Stats from './components/StatsTableContainer';
import Staticpage from './components/StaticPage';
import StaticFooter from './components/StaticFooter';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
//import GoogleLogin from './googleLogin';




class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    //  make axios request to  /api/current_user 
    //  set the state of user to whatever the return value is
    //  

    axios.get('/api/current_user')
      .then(response => {
        console.log(response.data.googleId)
      })

  }
  render() {
    return (
      <Router>
        <div>
          <Staticpage />
          <Switch>
            <Route path="/logit" component={LogForm}/>
            <Route exact path="/" component={Stats}/>
          </Switch>
          <StaticFooter />
        </div>
      </Router>
    );
  }
}

export default App;

// old code from boiler plate

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

