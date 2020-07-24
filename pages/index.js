import React from 'react';
import NavBar from '../components/Toolbar/NavBar';
import SideBar from '../components/Toolbar/SideBar';
import Backdrop from '../components/Toolbar/Backdrop';

class Home extends React.Component {

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
      <div className="app">
        <NavBar toggleClick={this.toggleClickHandler} />
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
        <main>
          <h1 className="title">Bienvenida a MeT[CBA]</h1>
        </main>
      </div>

    )
  }
}

export default Home;