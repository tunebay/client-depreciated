import React from 'react';
import className from 'classnames';
import '../../styles/components/common/price-pill.scss';

const PricePill = ({ price, button }) => {
  const pillClass = className({
    'price-pill': true,
    'pill-button': button
  });

  return (
    <div className={pillClass}>
      <div className="price-pill-text">
        {renderPrice(price)}
      </div>
    </div>
  );
};

const renderPrice = (price) => {
  if (!price || price <= 0.01) return 'Free';
  return `£${parseFloat(price)}`;
};

export default PricePill;
