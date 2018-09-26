import React, { Component } from 'react';
import { PhotoViewer2 } from 'components/photoViewer';

import store from './store2';

class Example extends Component {
  state = {
    current: {
      path: store.photos[0].path,
      markers: store.photos[0].markers,
    },
  };

  render() {
    return <PhotoViewer2 {...this.state.current} />;
  }
}

export default Example;
