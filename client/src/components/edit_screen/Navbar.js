import React from 'react'
import { Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
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
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <Modal header="Are you sure you want to delete this logo?" trigger={<Button style={ {cursor: "pointer", marginRight: "5px"} }>&#128465;</Button>}>
            <Button style={ {cursor: "pointer"} } onClick={this.deleteTest}>Yes</Button>
          </Modal>
          </ul>
        </div>
        
      </nav>
    )
  };
}

export default Navbar;