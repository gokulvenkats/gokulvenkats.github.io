import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <HeaderBar />
  }
}

const HeaderBar = () => (
  <header>
    <div className="announce-wrapper designletter">
      <div className="container">
        <div className="an-details">
          <p>Header</p>
        </div>
      </div>
    </div>
  </header> 
)

export default Header