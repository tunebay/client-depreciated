import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import _$ from 'jquery';
import ReactTestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
// import store from '../src'
import { createStore } from 'redux';
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);

const renderComponent = (ComponentClass, props, state) => {
  const componentInstance = ReactTestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance));
};

$.fn.simulate = (eventName, value) => {
  if (value) {
    this.val(value);
  }
  ReactTestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
