import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          alt="asdfg"
          src="https://rukminim1.flixcart.com/image/832/832/jk8lz0w0/bed/g/e/z/queen-na-particle-board-kosmo-mayflower-queen-bed-box-spacewood-original-imaf7mtfdv8hfg6z.jpeg?q=70"
        />
      </React.Fragment>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductDetail;
