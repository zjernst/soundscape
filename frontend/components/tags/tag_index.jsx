const React = require('react');
const TagIndexItem = require('./tag_index_item');
const FilterActions = require('../../actions/filter_actions');
const Label = require('react-bootstrap').Label;

const TagIndex = React.createClass({
  getInitialState() {
    return({tagsApplied: [], all: true})
  },

  _applyTag(tag_id) {
    this.setState({all: false});
    if (this.state.tagsApplied.includes(tag_id)) {
      let idx = this.state.tagsApplied.indexOf(tag_id)
      this.state.tagsApplied.splice(idx, 1);
    } else {
      let tags = this.state.tagsApplied
      tags.push(tag_id)
      this.setState({tagsApplied: tags})
    }
    this.props.updateFilters("tags", this.state.tagsApplied);
  },

  _all() {
    this.setState({tagsApplied: [], all: true});
    this.props.updateFilters("tags", []);
  },

  render() {
    let tags = this.props.allTags.map((tag) => {
      return <TagIndexItem tag={tag}
              key={tag.id}
              applyTag={this._applyTag}
              all={this.state.all} />
    });
    let allClass = "tag_label"
    if (this.state.all) {
      allClass = allClass + " selected"
    }
    return(
      <div className="tag filter_container">
      <div className="tag filter_title">
        <span className="tag filter_text">Tags</span>
      </div>
      <div className="tag_index">
        <div className="tag_index_item" onClick={this._all}>
          <h4 className="tag_item_text"><Label className={allClass}>
          Any Tag
          </Label></h4>
        </div>
        {tags}
        </div>
      </div>
    )
  }
})

module.exports = TagIndex;
