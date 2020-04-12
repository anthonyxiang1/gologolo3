// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES

import React, { Component } from 'react'
import NavbarNorm from './NavbarNorm.js'
import TextCreateSidebar from './TextCreateSidebar.js'

export class CreateScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        //console.log("\tEditScreen constructor");
        
    }

    componentDidMount = () => {
        //console.log("\tEditScreen component did mount");
    }

    componentWillUnmount = () => {
        //console.log("\tEditScreen component will unmount");
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <NavbarNorm/>
                <div className="row">
                    <TextCreateSidebar
                        //logo={this.state.logo}
                        // changeLogoCallback={this.props.changeLogoCallback}
                        // redoCallback={this.props.redoCallback}  
                        // undoCallback={this.props.undoCallback}        
                        // canRedo={this.props.canRedo}                                  
                        // canUndo={this.props.canUndo}                         
                    />
                    
                </div> 
            </div>
        )
    }
}

export default CreateScreen