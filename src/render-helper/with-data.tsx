import React, { Component } from 'react';
import Spinner from '../spinner';


type ItemListProps = {
    onItemSelected: (id: any) => any
    renderLabel: (item: any) => any
    data: any
  }

const withData = (View: any, getData: any) => {
    return class extends Component<ItemListProps> {
  
      state = {
        data: null
      }
    
      componentDidMount() {
    
        getData()
          .then((data: any) => {
            this.setState({
              data
            })
          })
      }
  
      render() {
  
        const {data} = this.state
  
        if (!data) {
          return (
            <div className="random-planet jumbotron rounded">
              <Spinner />
            </div>
          )
        }
  
        return <View {...this.props} data={data}/>
      }
    }
  }

  export default withData