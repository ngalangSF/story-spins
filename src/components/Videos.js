import React, { Component } from 'react';
import Popup from '../components/Popup';
import videoData from './../data/videos';

class Videos extends Component {
  constructor(props){
    super(props);
    this.state = {
      popupIndex: null,
      videos: videoData
    };
  }

  togglePopup(index) {
      this.setState({
        popupIndex: index,
        contentType: "Video"
      });
  }

  render() {
    return(
      <main className="container">
          <section className="videos">
            <header className="jumbotron my-4">
              <h1 className="display-4" align="center">Videos</h1>
            </header>
          </section>
          <section className="row text-center">
            {
              this.state.videos.map((video, index) =>
                  <section id={index} className="col-lg-4">
                    <button>
                      <img src={video.coverPhoto} className="cover" alt={video.title}
                        onClick={this.togglePopup.bind(this, index)}>
                      </img>
                    </button>
                    <h4 className="card-title">{video.title}</h4>
                  </section>
                )
            }
            {
              this.state.popupIndex !== null ?
                <Popup
                  popupIndex={this.state.popupIndex}
                  closePopup={
                    this.togglePopup.bind(this, null)
                  }
                  contentType={this.state.contentType}
                />
                : null
            }
          </section>
      </main>
    )
  }
}
export default Videos;
