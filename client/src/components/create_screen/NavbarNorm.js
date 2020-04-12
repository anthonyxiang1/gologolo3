import React from 'react'
import { Link } from 'react-router-dom';

class NavbarNorm extends React.Component {
  constructor() {
    super();
    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }>
            <Link to="/" style={{ textDecoration: 'none' }}>GoLogoLo</Link>
          </div>
        </div>
        
      </nav>
    )
  };
}

export default NavbarNorm;