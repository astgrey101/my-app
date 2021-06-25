import React from 'react';
import ReactDOM from 'react-dom';
import ApiService from './services/services';
import App from './app';

ReactDOM.render(<App />,document.getElementById('root'));





const swapi = new ApiService()

swapi.getAllPlanets().then((result) => {
    console.log(result)
})

swapi.getPlanet(12).then((result) => {
    console.log(result)
})
