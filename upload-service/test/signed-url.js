'use strict';

// tests for signed-url
// Generated by serverless-mocha-plugin

const mod = require('../signed-url/index.js');
const mochaPlugin = require('serverless-mocha-plugin');

const lambdaWrapper = mochaPlugin.lambdaWrapper;
const expect = mochaPlugin.chai.expect;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'handler' });

describe('signed-url', () => {
  before((done) => {
//  lambdaWrapper.init(liveFunction); // Run the deployed lambda

    done();
  });

  it('implement tests here', () =>
    wrapped.run({}).then((response) =>
      expect(response).to.not.be(undefined)));
});
