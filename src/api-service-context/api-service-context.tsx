import React from 'react';
import ApiService from '../services/services';

const value = new ApiService()

const {
    Provider: ApiServiceProvider,
    Consumer: ApiServiceConsumer
} = React.createContext(value)

export {
    ApiServiceProvider,
    ApiServiceConsumer
}