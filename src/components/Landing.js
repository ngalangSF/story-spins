import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import textData from './../data/text';

class Landing extends Component {

  constructor(props){
    super(props);
      this.state = {
        data: textData
      };
  }

  render() {
    return(
      <main className="container">
          <section className="landing">
            <header className="jumbotron my-4" alt="Story Spins banner image of spinning wheel">
              <div className="container">
                <h1 className="display-4" align="center">Welcome to Story Spins!</h1>
              </div>
            </header>
          </section>
          <section className="row text-center">
              <section>
                <p className="card-text">
                  {this.state.data.landingText}
                </p>
              </section>
              <section className="col-lg-4">
                <Link to="/books">
                  <img src="assets/books.png" className="icons" alt="books icon link"></img>
                </Link>
                <h4 className="card-title">Children's Books!</h4>
              </section>
              <section className="col-lg-4">
              <Link to="/videos">
                <img src="assets/videos.png" className="icons" alt="videos icon link"></img>
              </Link>
              <h4 className="card-title">Fun Videos!</h4>
              </section>
              <section className="col-lg-4">
              <Link to="/spin-your-own-story">
                <img src="assets/spinning-wheel.png" className="icons" alt="spinning-wheel icon link"></img>
              </Link>
              <h4 className="card-title">Spin Your Story!</h4>
              </section>
          </section>
      </main>
    )
  }
}

export default Landing;
