import React from 'react';
import className from 'classnames';
import '../../styles/components/common/price-pill.scss';

const PricePill = ({ price, button, backgroundColor }) => {
  const pillClass = className({
    'price-pill': true,
    'pill-button': button
  });

  return (
    <button className={pillClass} style={{ backgroundColor }}>
      <div className="price-pill-text">
        {renderPrice(price)}
      </div>
    </button>
  );
};

const renderPrice = (price) => {
  if (!price || price <= 0.01) return 'FREE';
  const priceString = `£${price}`;
  return priceString.substr(-3) === '.00' ?
    priceString.slice(0, -3) : priceString;
};

export default PricePill;
