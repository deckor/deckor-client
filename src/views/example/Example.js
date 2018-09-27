import React, {Component} from 'react';
import PhotoViewer from 'components/photoViewer';

import store from './store';

class Example extends Component {
  state = {
    scenes: store.scenes,
    products: store.products,
  };

  componentDidMount() {
    const images = store.scenes.map(scene => {
      const img = new Image();
      img.src = scene.panorama;
      return img;
    });
  }


  render() {
    return <PhotoViewer scenes={store.scenes} products={store.products}/>;
  }
}

export default Example;
