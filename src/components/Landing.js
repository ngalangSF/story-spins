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
      <main class="container">
          <section className="landing">
            <header class="jumbotron my-4" alt="Story Spins banner image of spinning wheel">
              <div class="container">
                <h1 class="display-4" align="center">Welcome to Story Spins!</h1>
              </div>
            </header>
          </section>
          <section class="row text-center">
              <section>
                <p class="card-text">
                  {this.state.data.landingText}
                </p>
              </section>
              <section class="col-lg-4">
                <Link to="/books">
                  <img src="assets/books.png" class="icons" alt="books icon link"></img>
                </Link>
                <h4 class="card-title">Children's Books!</h4>
              </section>
              <section class="col-lg-4">
              <Link to="/videos">
                <img src="assets/videos.png" class="icons" alt="videos icon link"></img>
              </Link>
              <h4 class="card-title">Fun Videos!</h4>
              </section>
              <section class="col-lg-4">
              <Link to="/spin-your-own-story">
                <img src="assets/spinning-wheel.png" class="icons" alt="spinning-wheel icon link"></img>
              </Link>
              <h4 class="card-title">Spin Your Story!</h4>
              </section>
          </section>
      </main>
    )
  }
}

export default Landing;
