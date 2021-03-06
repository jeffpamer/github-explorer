var author = React.createClass({

    render: function() {
        var style = this.props.avatar_url ? {
            backgroundImage: `url(${this.props.avatar_url})`
        } : {};

        return !this.props.login ? null :
            <div className="author" style={style}>
                {this.props.login}
            </div>
    }

});

module.exports = author;
