import React, {Component} from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

import productImages from './ss.png';
import calendarImg from './cal.png';
import tagImg from './tag.png';
import ecoFriendlyImg from './eco-friendly.jpeg';
import fAssuredImg from './f-assured.png';
import './ProductDetail.css';

const COMMA_FORMAT = '0,0';

class ProductDetail extends Component {

  renderOfferRow(offer) {
    return (
      <div className="offer-row mar-b-12 color-212121">
        <img src={offer.icon} className="offer-icon mar-r-16"/>
        <div className="txt-12">
          <strong>
            {offer.title}
          </strong>
          <span> </span>
          <span>
            {offer.description}
          </span>
          <span> </span>
          <a href={offer.extraInfoLink}>{offer.extraInfo}</a>
        </div>
      </div>
    );
  }

  renderOffers() {
    const product = this.props.product;

    return (
      <div className="pr-det-offers mar-t-16">
        {product.emi ? this.renderOfferRow({
          icon: calendarImg,
          title: `No cost EMI ₹${product.emi}/month`,
          description: 'Standard EMI also available',
          extraInfo: 'View Plans',
          extraInfoLink: '',
        }) : null}
        {
          product.offers.map(offer => (<React.Fragment key={offer.id}>
            {this.renderOfferRow({ ...offer, icon: tagImg })}
          </React.Fragment>))
        }
      </div>
    );
  }

  renderImageCarousel() {
    return (
      <img
        alt="images"
        src={productImages}
        className="img-carousel"
      />
    );
  }

  renderProductText() {
    const product = this.props.product;

    return (
      <React.Fragment>
        <h1 className="txt-17 color-272727 mar-t-28">{product.name}</h1>
        <div className="mar-t-16 center-y">
          <div className="pr-det-rating flex-auto">{`${product.averageRating} ★`}</div>
          <div
            className="pr-rating-count pad-l-8 color-878787">
            {`${numeral(product.totalRatings).format(COMMA_FORMAT)} Ratings & ${numeral(product.totalReviews).format(COMMA_FORMAT)} Reviews`}
          </div>
          <img src={fAssuredImg} alt="f-assured" className="flex-auto f-assured-img mar-l-4"/>
        </div>
        <p className="mar-t-12 prod-price txt-24 color-272727">{`₹${numeral(product.price).format(COMMA_FORMAT)}`}</p>
      </React.Fragment>
    )
  }

  renderProductDescription() {
    return (
      <div className="pr-det-desc pad-x-24 mar-t-24 mar-b-12">
        <p className="mar-t-24">PRODUCT DESCRIPTION</p>
        <div className="mar-t-16">
          <div className="center-y">
            <img className="pr-det-desc-img flex-item-auto" src={ecoFriendlyImg}/>
            <div className="flex-item-1 mar-l-16">
              <p className="txt-14">
                Eco Friendly
              </p>
              <p className="txt-12 mar-t-8">
                Not only is this furniture great looking but it’s also environmental-friendly. It’s made from certified
                eco-friendly wood that’s natural and sustainable
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFooter() {
    return (
      <div className="pr-det-footer flex-row">
        <button className="btn-secondary txt-17 flex-1">ADD TO CART</button>
        <button className="btn-primary txt-17 flex-1">BUY NOW</button>
      </div>
    );
  }

  render() {
    return (
      <div className="ovf-y-auto color-212121 pos-rel pr-det-cont">
        <div className="pad-x-24 pad-t-24">
          {this.renderImageCarousel()}
          {this.renderProductText()}
          {this.renderOffers()}
        </div>
        {this.renderProductDescription()}
        {this.renderFooter()}
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object,
};

ProductDetail.defaultProps = {
  product: {
    name: 'Spacewood Mayflower Engineering Wood Queen Box Bed (Finish Color - Brown)',
    price: 14499,
    averageRating: 3.8,
    totalRatings: 2232,
    totalReviews: 524,
    emi: 2417,
    offers: [
      {
        id: 1,
        title: 'Bank Offer',
        description: '5% off* on EMI transactions with HDFC Bank Credit Cards',
        extraInfo: 'T&C',
        extraInfoLink: '',
      },
      {
        id: 2,
        title: 'Bank Offer',
        description: '5% off* on EMI transactions with HDFC Bank Credit Cards',
        extraInfo: 'T&C',
        extraInfoLink: '',
      },
      {
        id: 3,
        title: 'Bank Offer',
        description: '5% off* with Axis Bank Buzz Credit Card',
        extraInfo: 'T&C',
        extraInfoLink: '',
      },
    ],
  }
};

export default ProductDetail;
