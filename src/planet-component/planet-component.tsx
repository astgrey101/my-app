import React, { FC } from 'react';
import { PlanetList } from '../components'
import { withRouter } from 'react-router-dom';

import './planet-component.css'

interface Props {
  history: any
}

const PlanetComponent: FC<Props> = ({ history }) => {

  return (
    <PlanetList 
        onItemSelected={(itemId) => {
          history.push(itemId)
        }}
        renderLabel={(item: any) => `${item.name} (ID ${item.id})`}
        data={null}>
    </PlanetList>
  )

}

export default withRouter(PlanetComponent)