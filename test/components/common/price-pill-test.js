import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PricePill from '../../../src/components/common/price-pill';

describe('<PricePill />', () => {
  it('Displays Free for no price', () => {
    const wrapper = shallow(<PricePill price="0.00" />);
    expect(wrapper.text()).to.equal('Free');
  });

  it('Renders the given price', () => {
    const wrapper = shallow(<PricePill price="6.99" />);
    expect(wrapper.text()).to.equal('£6.99');
  });

  it('Cuts of trailing .00 for whole number price', () => {
    const wrapper = shallow(<PricePill price="6.00" />);
    expect(wrapper.text()).to.equal('£6');
  });

  it('Can handle no decimal', () => {
    const wrapper = shallow(<PricePill price="6" />);
    expect(wrapper.text()).to.equal('£6');
  });

  it('It doesnt cut off last zero if both decimals arent zeros', () => {
    const wrapper = shallow(<PricePill price="6.50" />);
    expect(wrapper.text()).to.equal('£6.50');
  });
});
