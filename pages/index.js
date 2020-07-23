import React from 'react';
import NavBar from '../components/Toolbar/NavBar';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <h1 className="title">Bienvenida a MeT[CBA]</h1>
        </main>
      </React.Fragment>

    )
  }
}

export default Home;