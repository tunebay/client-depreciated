require('babel-register')();
const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<!doctype html><html><body><div id="root" /></body></html>');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

// global.localStorage = storageMock();

global.navigator = {
  userAgent: 'node.js'
};

// <!doctype html><html><body><div id="root" /></body></html>
documentRef = document;
