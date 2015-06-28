var jsdom = require('mocha-jsdom');
var assert = require('assert');

describe('CommitListItem', function() {
    jsdom();

    it('intializes with empty commit', function() {
        var React = require('react/addons');
        var CommitListItem = require('../app/components/commitListItem');
        var TestUtils = React.addons.TestUtils;

        // Render a commit with no props
        var commit = TestUtils.renderIntoDocument(
            <CommitListItem  />
        );

        window.console.log(commit);

        // Verify that it's Off by default
        var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
        assert.equal(label.getDOMNode().textContent, 'Off');

        // Simulate a click and verify that it is now On
        var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
        TestUtils.Simulate.change(input);
        assert.equal(label.getDOMNode().textContent, 'On');
    });
});
