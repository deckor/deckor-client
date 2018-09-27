import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ProductCarousel.css';

class ProductCarousel extends PureComponent {
  state = {
    currentIndex: 0,
  };

  handleMouseEnter = e => {
    this.setState({ currentIndex: +e.currentTarget.dataset.index });
  };

  renderImageTile = (image, index) => {
    return (
      <li
        data-index={index}
        className={cx('cp img-picker-tile', { 'img-picker-tile-selected': index === this.state.currentIndex })}
        onMouseEnter={this.handleMouseEnter}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="img-picker-title-img full-space bg-img-cc"
        />
      </li>
    );
  };

  render() {
    const { props } = this;
    return (
      <div className="full-width flex-row">
        <ul className="flex-auto image-list">
          {props.images.map(this.renderImageTile)}
        </ul>
        <div className="image-preview-c flex-1 pad-x-24">
          <div
            className="image-preview bg-img-cc full-space"
            style={{ backgroundImage: `url(${props.images[this.state.currentIndex]})` }}
          />
        </div>
      </div>
    );
  }
}

ProductCarousel.displayName = 'ProductCarousel';
ProductCarousel.propTypes = {};
ProductCarousel.defaultProps = {
  images: [],
};

export default ProductCarousel;
