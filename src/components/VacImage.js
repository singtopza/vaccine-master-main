import React from 'react';

class VacImage extends React.Component {
  render () {
    return <img src={this.props.path} className='vac-img'></img>;
  }
}

export default VacImage;