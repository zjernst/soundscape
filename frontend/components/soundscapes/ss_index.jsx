const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeIndexItem = require('./ss_index_item');
const WelcomeCarousel = require('../welcome_carousel');
const FilteredList = require('../filtered_list');

const SoundscapeIndex = React.createClass({
  getInitialState() {
    return({soundscapes: SoundscapeStore.all()})
  },

  componentDidMount() {
    this.ssStoreListener = SoundscapeStore.addListener(this._onChange)
    SoundscapeActions.fetchAllSoundscapes();
  },

  componentWillUnmount() {
    this.ssStoreListener.remove();
  },

  _onChange() {
    this.setState({soundscapes: SoundscapeStore.all()})
  },

  render() {
    let soundscapes = this.state.soundscapes.map((soundscape) => {
      return <SoundscapeIndexItem
              soundscape={soundscape}
              key={soundscape.id} />
    });

    return(
      <div className="soundscape_index">
        <div className="soundscape_index_text">Discover new sounds</div>
        {soundscapes}
        <FilteredList />
      </div>
    )
  }
});

// <div className="carousel_container">
//   <WelcomeCarousel />
// </div>
module.exports = SoundscapeIndex;
