const React = require('react');
const Label = require('react-bootstrap').Label;
const FilterActions = require('../../actions/filter_actions');
const classNames = require('classnames');

const TagIndexItem = React.createClass({
  getInitialState() {
    return({seleted: false})
  },

  _tagFilter() {
    this.props.applyTag(this.props.tag.id)
    this.setState({selected: !this.state.selected})
  },

  render() {
    let tagClass
    if (this.state.selected) {
      tagClass = classNames("tag_index_item", "selected")
    } else {
      tagClass = "tag_index_item"
    }
    return(
      <div className={tagClass} onClick={this._tagFilter}>
        <h3><Label>{this.props.tag.name}</Label></h3>
      </div>
    )
  }
})

module.exports = TagIndexItem;
