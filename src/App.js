import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import './App.css';
import axios from 'axios';

class App extends Component {
  // constructor(){
  //   super();
  // }

  // componentDidMount(){
  //   axios.get('https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams', {
  //   })
  //     .then(({ data }) => {
  //       console.log('data', data);
  //     this.setState({

  //     });
  //   })
  // };
  // componentDidMount(){
  //   axios({
  //     method:'GET',
  //     url: 'https://api.fantasydata.net/v3/nfl/projections/json/FantasyDefenseProjectionsByGame/2016/1?',
  //   })
  //     .then((res) => {
  //       console.log('data', res);
  //     // this.setState({

  //     // });
  //   })
  // };
  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Fantasy Trade Calculator</h1>
        </div>

      </div>
    );
  }
}

export default App;
