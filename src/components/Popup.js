import React, { Component } from 'react';
import videoData from './../data/videos';
import bookData from './../data/books';

class Popup extends Component {
  constructor(props){
    super(props);

    if(props.contentType === "Video"){
      this.state = {
        data: videoData
      };
    } else if(props.contentType === "Book"){
      this.state = {
        data: bookData
      };
    }
  }

  handleOuterClick(e){
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
  }

  render() {
    return (
      <section className='col-lg-1'>
        <div className='popup' onClick={this.props.closePopup}>
          <div className='popup_inner'>
            <div id="popup-content" onClick={this.handleOuterClick}>
              <img id="popup-image" className="cover" src={this.state.data[this.props.popupIndex].coverPhoto} alt={this.state.data[this.props.popupIndex].title} height="350" width="350">
              </img>
              <h4 className="card-font">{this.state.data[this.props.popupIndex].title}</h4>
              <p className="card-font">{this.state.data[this.props.popupIndex].description}</p>
              <button id="return-button" className="btn btn-primary" onClick={this.props.closePopup}>Return to {this.props.contentType}s</button>
              <a href={this.state.data[this.props.popupIndex].amazonLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-success">Purchase on Amazon</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Popup;
