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

  componentWillReceiveProps(newProps) {
    if (newProps.all) {
      this.setState({selected: false})
    }
  },

  render() {
    let tagClass
    if (this.state.selected) {
      tagClass = classNames("tag_label", "selected")
    } else {
      tagClass = "tag_label"
    }
    name = this.props.tag.name
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return(
      <div className="tag_index_item" onClick={this._tagFilter}>
        <h4 className="tag_item_text"><Label className={tagClass}>{name}</Label></h4>
      </div>
    )
  }
})

module.exports = TagIndexItem;
