const React = require('react');
const TagIndexItem = require('./tag_index_item');
const FilterActions = require('../../actions/filter_actions');

const TagIndex = React.createClass({
  getInitialState() {
    return({tagsApplied: []})
  },

  _applyTag(tag_id) {
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

  // _updateResults() {
  //   FilterActions.updateResults(this.state.tagsApplied);
  //   FilterActions.fetchAllTracks({tags: this.state.tagsApplied});
  // },

  render() {
    let tags = this.props.allTags.map((tag) => {
      return <TagIndexItem tag={tag}
              key={tag.id}
              applyTag={this._applyTag} />
    });
    return(
      <div className="tag_index">
        {tags}
      </div>
    )
  }
})

module.exports = TagIndex;
