import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PricePill from '../../src/components/common/price-pill';

describe('<PricePill />', () => {
  it('Displays Free for no price', () => {
    const wrapper = shallow(<PricePill price="0.00" />);
    expect(wrapper.text()).to.equal('Free');
  });

  it('Renders the given price', () => {
    const wrapper = shallow(<PricePill price="6.99" />);
    expect(wrapper.text()).to.equal('£6.99');
  });
});
