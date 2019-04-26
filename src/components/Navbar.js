import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.setNavRef = this.setNavRef.bind(this);
    this.setNavButtonRef = this.setNavButtonRef.bind(this);
    this.setNavHeaderRef = this.setNavHeaderRef.bind(this);
    this.setNavLinkRef = this.setNavLinkRef.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  setNavRef(node) {
    this.navRef = node;
  }
  setNavButtonRef(node) {
    this.navButtonRef = node;
  }
  setNavHeaderRef(node) {
    this.navHeaderRef = node;
  }
  setNavLinkRef(node) {
    this.navLinkRef = node;
  }

  componentWillMount(){
    document.addEventListener('mousedown', this.toggleNavbar);
  }
  componentWillUnmount(){
    document.addEventListener('mousedown', this.toggleNavbar);
  }

  toggleNavbar(event) {
     var toggleStatus = this.navLinkRef.classList.value;
     var isOpened = status => {return status === "navbar-collapse collapse show"}; //returns boolean
     var toggleButton = this.navButtonRef.firstChild; //accesses navbar icon button to click

     if(!this.navRef.contains(event.target) && isOpened(toggleStatus)){
          toggleButton.click();
     } else if (this.navLinkRef.contains(event.target) && isOpened(toggleStatus)){
          toggleButton.click();
     } else if(this.navHeaderRef.contains(event.target) && isOpened(toggleStatus)){
          toggleButton.click();
     }
  }

  render() {
    return (
      <div className="container">
          <div ref={this.setNavRef} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div ref={this.setNavHeaderRef} className="navbar-header">
                  <Link to='/' className="navbar-brand">
                    <img src="assets/spinning-wheel-animation.jpg" class="rotate" alt="animated spinning wheel story spins logo"></img>
                      Story Spins
                  </Link>
                  <span class= 'navbar-text'>by Linda Lewin</span>
              </div>
              <div>
                <button ref={this.setNavButtonRef} type="button" id="collbtn" class="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive"
                 aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleNavbar.bind(this)}>
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div ref={this.setNavLinkRef} className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to='/books' className="nav-link">Books</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/videos' className="nav-link">Videos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/spin-your-own-story' className="nav-link">Spin Your Story</Link>
                    </li>
                    <li className="nav-item">
                     <Link to='/bio-contact' className="nav-link">Bio/Contact</Link>
                     </li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
