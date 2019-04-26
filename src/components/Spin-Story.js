import React, { Component } from 'react';
import textData from './../data/text';

class SpinStory extends Component {

  constructor(props){
    super(props);
      this.state = {
        data: textData
      };
  }

  render() {
    return(
      <main className="container">
          <section className="spin-your-story">
            <header className="jumbotron my-4" alt="Story Spins banner image of spinning wheel">
              <h1 className="display-4" align="center">Spin Your Own Story!</h1>
            </header>
          </section>
          <section className="row text-center">
              <section>
                <p className="card-text">
                  {this.state.data.spinningStoriesText}
                </p>
                <a href="mailto:168storyspinner@gmail.com">
                  <button id="idea-button" className="btn btn-info">Submit an idea!</button>
                </a>
              </section>
          </section>
      </main>
    )
  }
}

export default SpinStory;
