import React, { Component } from 'react';
import ApiService from '../services/services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css'

export default class RandomPlanet extends Component {

  interval: any

  apiService = new ApiService()

  state = {
    planet: {
      id: null, 
      name: null, 
      population: null, 
      rotationPeriod: null, 
      diameter: null
    },
    loading: true,
    error: false
  }

  constructor(props?: any) {
    super(props);
    
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet: any) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  }

  onError = (err: any) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17) + 2;
    this.apiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

    render() {

      const {
        planet: {
          id, name, 
          population, 
          rotationPeriod, 
          diameter
        },
        loading,
        error
      } = this.state

      if (loading) {
        return (
          <div className="random-planet jumbotron rounded">
            <Spinner />
          </div>
        )
      }

      if(error) {
        return (
          <div className="random-planet jumbotron rounded">
            <ErrorIndicator />
          </div>
        )
      }

      return (
        <div className="random-planet jumbotron rounded">
          <img className="planet-image"
               src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
          <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
  
      );
    }
  }