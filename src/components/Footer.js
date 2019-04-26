import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="footer-dark font-small pt-4">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <hr class="clearfix w-100 d-md-none pb-3"></hr>
            </div>
            <div class="footer-copyright text-right py-3">© 2019 Copyright:&nbsp;
              <a href="https://nickgalangsf.com" target="_blank" rel="noopener noreferrer">NickGalangSF.com</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
