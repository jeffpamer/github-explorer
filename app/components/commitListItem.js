var Author = require('./author');

var commitListItem = React.createClass({

    render: function() {
        return <li className="commitListItem">
            <Author {...this.props.author} />
            <div className="commitMessage">{this.props.commit.message}</div>
        </li>
    }

});

module.exports = commitListItem;
