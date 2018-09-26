import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductDetail from 'components/productDetail';

import { map } from 'lodash';
import memoizeOne from 'memoize-one';

import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import './PhotoViewer.css';

class PhotoViewer2 extends Component {
  state = {
    isDetailVisible: false,
  };

  componentDidMount() {
    this.initViewer();
  }

  initViewer() {
    window.pannellum.viewer('viewer', {
      type: 'equirectangular',
      panorama: this.props.path,
      autoLoad: true,
      compass: true,
      hfov: 180,
      hotSpotDebug: true,
      hotSpots: this.getHotSpots(this.props.markers),
    });
  }

  getHotSpots = memoizeOne(markers => [
    ...map(markers.navs, (navMarker, i) => {
      return {
        id: `nav-${i}`,
        pitch: -9.81,
        yaw: 47.43,
        cssClass: 'pnlm-hotspot--nav',
        clickHandlerFunc: this.onClickHotspot.bind(this, 'nav', i),
      };
    }),
    ...map(markers.tags, (tagMarker, i) => {
      return {
        id: `tag-${i}`,
        pitch: -20.37,
        yaw: 5.88,
        cssClass: 'pnlm-hotspot--tag',
        clickHandlerFunc: this.onClickHotspot.bind(this, 'tag', i),
      };
    }),
  ]);

  onClickHotspot = (type, i) => {
    console.log('clicked hotspot', type, i);
    if (type === 'tag') {
      this.setState(({ isDetailVisible }) => ({
        isDetailVisible: !isDetailVisible,
      }));
    }
  };

  render() {
    const { isDetailVisible } = this.state;

    return (
      <React.Fragment>
        <div id="viewer" className="full-space" />
        <div className={`panel${isDetailVisible ? ' panel--open' : ''}`}>{isDetailVisible && <ProductDetail />}</div>
      </React.Fragment>
    );
  }
}

PhotoViewer2.propTypes = {
  path: PropTypes.string,
};

export default PhotoViewer2;
