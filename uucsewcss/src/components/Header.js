import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="mainLogo w3-container">
          <img src="https://uttarauniversity.edu.bd/department/assets/uploads/logo/07e87-uu_2.png" width="width" height="height" alt="Uttara University Computer Science &amp; Engineering" ></img>
        </div>
        <div className="mainNav w3-margin-bottom w3-card-4">
          <div className="w3-bar w3-xlarge w3-container">
            <a href="#" className="w3-bar-item w3-button w3-hover-opacity"><i class="fa fa-home"></i></a>
            <a href="#" className="w3-bar-item w3-button w3-hover-opacity">Faculty</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-opacity">Accounts</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-opacity">Result</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-opacity">Routine</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-opacity">Notice</a>

            <div className="w3-dropdown-hover w3-hover-opacity w3-right">
              <button className="w3-button"><i class="fa fa-child"></i></button>
              <div className="w3-dropdown-content w3-bar-block w3-card-2">
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
              </div>
            </div>
            <div className="w3-dropdown-hover w3-hover-opacity w3-right">
              <button className="w3-button"><i className="fa fa-bug"></i></button>
              <div className="w3-dropdown-content w3-bar-block w3-card-2">
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
              </div>
            </div>
            <div className="w3-dropdown-hover w3-hover-opacity w3-right">
              <button className="w3-button"><i className="fa fa-code"></i></button>
              <div className="w3-dropdown-content w3-bar-block w3-card-2">
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Header;
