import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductDetail from 'components/productDetail';

import {map, pick, reduce} from 'lodash';

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

    let firstScene = scenes[0].id;
    const config = {
      default: {
        firstScene,
        sceneFadeDuration: 1000,
        autoLoad: true,
        // hotSpotDebug: true,
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

    window.prevSceneId = firstScene;
    window.pannellumViewer = window.pannellum.viewer('viewer', config);
    window.pannellumViewer.on('scenechange', (nextScene) => {
      console.log('clicked on -- ', nextScene);
      const lookAtItem = (this.props.lookAtMap[nextScene] || {})[window.prevSceneId];
      window.prevSceneId = nextScene;
      if (lookAtItem) {
        window.pannellumViewer.lookAt(lookAtItem.pitch, lookAtItem.yaw, undefined, false);
        setTimeout(() => {
          window.pannellumViewer.lookAt(0, 0)
        }, 1000);
      }
    });
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
          clickHandlerFunc: this.onNavClick,
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

  onNavClick = () => {
    this.setState({
      isDetailVisible: false,
      productId: undefined,
    });
  };

  onClickTagHotSpot = productId => {
    setTimeout(() => {
      this.setState(() => ({
        isDetailVisible: true,
        productId: productId,
      }));
    });
  };

  handleViewerClick = () => {
    this.setState(() => ({
      isDetailVisible: false,
      productId: undefined,
    }));
  }

  render() {
    const { isDetailVisible, productId } = this.state;
    const product = this.props.products[productId];

    return (
      <React.Fragment>
        <div id="viewer" className="full-space" onClick={this.handleViewerClick}/>
        <div className={`panel${isDetailVisible ? ' panel--open' : ''}`}>{isDetailVisible &&
        <ProductDetail product={product}/>}</div>
      </React.Fragment>
    );
  }
}

PhotoViewer.propTypes = {
  path: PropTypes.string,
  lookAtMap: PropTypes.objectOf(PropTypes.objectOf(PropTypes.shape({
    pitch: PropTypes.number.isRequired,
    yaw: PropTypes.number.isRequired,
  }))),
};

export default PhotoViewer;
