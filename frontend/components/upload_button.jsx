const React = require("react");

const UploadButton = React.createClass({
  _upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results){
      if(!error){
        this.props.uploadTrack(results[0])
      }
    }.bind(this));
  },

  render() {
    return (
      <div className="upload-form">
        <button onClick={this._upload}>Upload new track!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
