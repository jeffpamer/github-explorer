var commitListItem = React.createClass({

    render: function() {
        return <li>
            {this.props.commit.message}
        </li>
    }

});

module.exports = commitListItem;
