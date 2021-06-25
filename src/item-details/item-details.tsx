import React, { Component } from 'react';
import ApiService from '../services/services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withRouter } from 'react-router-dom';

import './item-details.css'
import { nodeModuleNameResolver } from 'typescript';

type ItemDetailsProps = {
  planetId: any
}

export default class ItemDetails extends Component<ItemDetailsProps> {

  apiService = new ApiService()

    state = {
      planet: {
        id: null, 
        name: null, 
        population: null, 
        rotationPeriod: null, 
        diameter: null,
        orbitalPeriod: null,
        climate: null,
        gravity: null,
        terrain: null,
        surfaceWater: null
      },
      loading: true,
      error: false
    }

    componentDidMount() {
      this.updatePlanet()
    }

    componentDidUpdate(prevProps: any) {
      if (this.props.planetId !== prevProps.planetId) {
        this.updatePlanet()
      }
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

    updatePlanet() {
        const { planetId } = this.props
        if (!planetId) {
          return
        }

        this.apiService
          .getPlanet(planetId)
          .then(this.onPlanetLoaded)
          .catch(this.onError)
    }

    render() {

      if (this.state.planet.id == null) {
         return <span>Select a planet from a list</span>
      }

      const {
        planet: {
          id, name, 
          population, rotationPeriod, 
          diameter, orbitalPeriod, climate, gravity, terrain, surfaceWater
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
        <div className="person-details card">
          <img className="person-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
  
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation period</span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Orbital Period</span>
                <span>{orbitalPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Climate</span>
                <span>{climate}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Gravity</span>
                <span>{gravity}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Terrain</span>
                <span>{terrain}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Surface Water</span>
                <span>{surfaceWater}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
  