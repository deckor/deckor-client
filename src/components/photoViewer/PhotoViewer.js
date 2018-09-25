import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PhotoSphereViewer from 'photo-sphere-viewer';
import ProductDetail from 'components/productDetail';

import { map } from 'lodash';

import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import './PhotoViewer.css';

import circle from 'icons/circle.svg';
import tag from 'icons/tag.svg';

class PhotoViewer extends Component {
  state = {
    derivedMarkers: [],
  };

  componentDidMount() {
    this.initViewer();
    this.onInitViewer();
  }

  static getDerivedStateFromProps({ markers }) {
    const derivedMarkers = [
      ...map(markers.navs, (navMarker, i) => {
        return {
          id: `nav-${i}`,
          image: circle,
          width: 32,
          height: 32,
          // style: {
          //   transform: 'rotate3d(1, 1, 1, 45deg)',
          // },
          className: 'pv-marker-nav',
          ...navMarker,
        };
      }),
      ...map(markers.tags, (tagMarker, i) => {
        return {
          id: `tag-${i}`,
          image: tag,
          width: 32,
          height: 32,
          className: 'pv-marker-tag',
          ...tagMarker,
          content: 'a quick',
        };
      }),
    ];

    return {
      derivedMarkers,
    };
  }

  initViewer() {
    this.viewer = new PhotoSphereViewer({
      container: 'viewer',
      panorama: this.props.path,
      time_anim: false,
      default_fov: 90,
      markers: this.state.derivedMarkers,
    });
  }

  onInitViewer() {
    this.viewer.on('select-marker', marker => {
      setTimeout(() => {
        ReactDOM.render(<ProductDetail />, document.querySelector('.psv-panel-content'));
      });
    });
  }

  render() {
    return <div id="viewer" className="full-space" />;
  }
}

PhotoViewer.propTypes = {
  path: PropTypes.string,
};

export default PhotoViewer;
