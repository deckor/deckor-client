import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductDetail from 'components/productDetail';

import { map, pick, reduce } from 'lodash';

import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import './PhotoViewer.css';

class PhotoViewer extends Component {
  state = {
    isDetailVisible: false,
  };

  componentDidMount() {
    this.initViewer();
  }

  initViewer() {
    const { scenes } = this.props;

    const config = {
      default: {
        firstScene: scenes[0].id,
        sceneFadeDuration: 1000,
        autoLoad: true,
        hotSpotDebug: true,
      },
    };

    config.scenes = reduce(
      scenes,
      (acc, scene) => {
        acc[scene.id] = {
          type: 'equirectangular',
          ...pick(scene, 'panorama', 'hfov'),
          hotSpots: this.getHotSpots(scene.markers),
        };

        return acc;
      },
      {}
    );

    window.pannellum.viewer('viewer', config);
  }

  getHotSpots(markers) {
    return [
      ...map(markers.navs, (navMarker, i) => {
        return {
          id: `nav-${i}`,
          type: 'scene',
          pitch: navMarker.pitch,
          yaw: navMarker.yaw,
          sceneId: navMarker.sceneId,
          cssClass: 'pnlm-hotspot--nav',
        };
      }),
      ...map(markers.tags, (tagMarker, i) => {
        return {
          id: `tag-${i}`,
          pitch: tagMarker.pitch,
          yaw: tagMarker.yaw,
          cssClass: 'pnlm-hotspot--tag',
          clickHandlerFunc: this.onClickTagHotSpot.bind(this, tagMarker.productId),
        };
      }),
    ];
  }

  onClickTagHotSpot = productId => {
    this.setState(({ isDetailVisible }) => ({
      isDetailVisible: !isDetailVisible,
      productId: isDetailVisible ? undefined : productId,
    }));
  };

  render() {
    const { isDetailVisible, productId } = this.state;
    const product = this.props.products[productId];

    return (
      <React.Fragment>
        <div id="viewer" className="full-space" />
        <div className={`panel${isDetailVisible ? ' panel--open' : ''}`}>{isDetailVisible && <ProductDetail product={product} />}</div>
      </React.Fragment>
    );
  }
}

PhotoViewer.propTypes = {
  path: PropTypes.string,
};

export default PhotoViewer;
