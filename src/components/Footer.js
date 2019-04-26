import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="footer-dark font-small pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <hr className="clearfix w-100 d-md-none pb-3"></hr>
            </div>
            <div className="footer-copyright text-right py-3">© 2019 Copyright:&nbsp;
              <a href="https://nickgalangsf.com" target="_blank" rel="noopener noreferrer">NickGalangSF.com</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
