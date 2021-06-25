import React, { Component } from 'react';
import Header from '../header';
import PlanetComponent from '../planet-component';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { ApiServiceProvider } from '../api-service-context';
import ApiService from '../services/services';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ItemDetails from '../item-details';
import {SecretPage, LoginPage} from '../pages'

import './app.css'

export default class App extends Component {

  apiService = new ApiService()

  state = {
    // showRandomPlanet: true,
    hasError: false,
    isLoggedIn: false
  };

  // toggleRandomPlanet = () => {
  //   this.setState(() => {
  //     return {
  //       showRandomPlanet: !this.state.showRandomPlanet
  //     }
  //   })
  // }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  componentDidCatch() {
    this.setState({hahasError: true})
  }

  render() {

    const {isLoggedIn} = this.state

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    // const planet = this.state.showRandomPlanet ?
    //   <RandomPlanet/> :
    //   null

    return (
      <Router>
        <div>
          <Header />
          <RandomPlanet/>
          {/* { planet } */}

          {/* <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button> */}
          <Switch>
            <Route path="/" 
                  render={() => <h2>Welcome to Planets DB!</h2>} 
                  exact />
            <Route path="/planets/" exact component={PlanetComponent} />
            <Route path="/planets/:id" 
                render={({match, location, history}) => {
                  const {id} = match.params
                return <ItemDetails planetId={id}/>} 
                }/>

              <Route 
                  path="/login"
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin}/>
                  )}/>

              <Route 
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}/>
              <Route render={() => <h2>404 Page not found</h2>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
