import React, { Component }from 'react';

class LoginView extends Component {

  render() {
    return (
      <div className=" login-container container">


        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">TrueScore</h1>
            <p className="lead">Crowd sourced sentiment</p>
          </div>
        </div>

      <div className="row">
        <div className="left-column-login col-xs-6 col-sm-6 col-lg-6">
          <h5>How it works</h5>
          <ol>
            <li className="selling-points">Choose between two people on various attributes</li>
            <li className="selling-points">Our advanced algorithm analyze your choices</li>
            <li className="selling-points">You see a list of your preferences</li>
          </ol>
          <div>
            <span>
              <a href="auth/facebook"><img className="btn-fb" src="/assets/fbButton.png" width="224" /></a>
            </span>
          </div>
        </div>
        <div className="right-column-login col-xs-6 col-sm-6 col-lg-6">
          <div>
            <h5>Example</h5>
            <img className="screenShot" src="/assets/compare_page.png"/>
          </div>
        </div>
      </div>

    </div>
    )
  }
}
export default LoginView;
