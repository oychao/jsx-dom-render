const assert = require('assert');

const React = require('..');

describe('jsx-dom-render', () => {
    it('should contains a method named createElement.', done => {
        assert(typeof React.createElement === 'function');
        done();
    });

    // // still working on how to test DOM related methods
    // it('should be able to create DOM elements.', done => {
    //     const div = React.createElement('div');
    //     assert(div instanceof HTMLDivElement);
    //     done();
    // });
});
