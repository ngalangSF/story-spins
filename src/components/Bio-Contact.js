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
      <main className="container">
          <section className="bio-contact">
            <header className="jumbotron my-4" alt="Story Spins banner image of spinning wheel">
              <h1 className="display-4" align="center">About the Author</h1>
            </header>
          </section>
          <section className="row text-center">
              <section className="col-lg-6">
                <img id="headshot-image" src="../assets/headshot.jpg" alt="Linda Lewin, Author of Children's Books"></img>
              </section>
              <section className="col-lg-6">
                <h4 className="card-title">Bio</h4>
                <p className="card-text">
                  {this.state.data.bioContactText}
                </p>
                <br></br>
                <h4 className="card-title">Contact Me</h4>
                <p className="card-text">
                  Phone:&nbsp;
                  <a className="contact-info" href="tel:(000) 000-0000">(000) 000-0000</a>
                </p>
                <p className="card-text">
                  Email:&nbsp;
                  <a className="contact-info" href="mailto:168storyspinner@gmail.com">168storyspinner@gmail.com</a>
                </p>
              </section>
          </section>
      </main>
    )
  }
}

export default BioContact;
