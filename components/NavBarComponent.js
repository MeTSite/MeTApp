import React from 'react';
import NavBar from '../components/Toolbar/NavBar';
import SideBar from '../components/Toolbar/SideBar';
import Backdrop from '../components/Toolbar/Backdrop';

class NavBarComponent extends React.Component {

  state = {
    sideBarOpen: false
  };

  toggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  }

  backdropHandler = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {

    let sideBar;
    let backdrop;

    if (this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.backdropHandler} />
    };

    return (
      <>
        <NavBar toggleClick={this.toggleClickHandler} />
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
      </>

    )
  }
}

export default NavBarComponent;
