import React from 'react';
import '../../styles/components/common/price-pill.scss';

const PricePill = ({ price }) => {
  return (
    <div className="price-pill">
      <div className="price-pill-text">
        {renderPrice(price)}
      </div>
    </div>
  );
};

const renderPrice = (price) => {
  if (!price || price <= 0.01) return 'Free';
  return `£${price}`;
};

export default PricePill;
