import React, { Component, FC } from 'react';
import ItemDetails from '../item-details';
import ItemList from '../item-list';
import ErrorIndicator from '../error-indicator';
import ApiService from '../services/services';
import { withData } from '../render-helper';

const apiService = new ApiService()

const { getAllPlanets } = new ApiService()


const PlanetList = withData(ItemList, getAllPlanets)

export {
    PlanetList
}