import React, { Component } from 'react';
import textData from './../data/text';

class BioContact extends Component {

  constructor(props){
    super(props);
      this.state = {
        data: textData
      };
  }

  render() {
    return(
      <main class="container">
          <section className="bio-contact">
            <header class="jumbotron my-4" alt="Story Spins banner image of spinning wheel">
              <h1 class="display-4" align="center">About the Author</h1>
            </header>
          </section>
          <section class="row text-center">
              <section class="col-lg-6">
                <img id="headshot-image" src="../assets/headshot.jpg" alt="Linda Lewin, Author of Children's Books"></img>
              </section>
              <section class="col-lg-6">
                <h4 class="card-title">Bio</h4>
                <p class="card-text">
                  {this.state.data.bioContactText}
                </p>
                <br></br>
                <h4 class="card-title">Contact Me</h4>
                <p class="card-text">
                  Phone:&nbsp;
                  <a class="contact-info" href="tel:(000) 000-0000">(000) 000-0000</a>
                </p>
                <p class="card-text">
                  Email:&nbsp;
                  <a class="contact-info" href="mailto:168storyspinner@gmail.com">168storyspinner@gmail.com</a>
                </p>
              </section>
          </section>
      </main>
    )
  }
}

export default BioContact;
