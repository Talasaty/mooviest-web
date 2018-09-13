import * as React from "react";
import Navbar from '../Navbar/Navbar.view';


class Header extends React.Component {
  public render() {
    return (
      <div className="Header-wrapper">
        <Navbar />
      </div>
    );
  }
}

export default Header;