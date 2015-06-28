var moment = require('moment');
var Author = require('./author');

var commitListItem = React.createClass({

    render: function() {
        return <li className="commitListItem">
            <Author {...this.props.author} />
            <span className="commitDate">{moment(this.props.commit.author.date).fromNow()}</span>
            <div className="commitMessage">{this.props.commit.message}</div>
            <a target="_blank" href={this.props.html_url}>{this.props.html_url}</a>
        </li>
    }

});

module.exports = commitListItem;
