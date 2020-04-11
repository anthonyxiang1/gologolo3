// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES

import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        //console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
        
    }

    componentDidMount = () => {
        //console.log("\tEditScreen component did mount");
    }

    componentWillUnmount = () => {
        //console.log("\tEditScreen component will unmount");
    }

    // <TextEditSidebar
    //                     logo={this.props.logo}
    //                     changeLogoCallback={this.props.changeLogoCallback}
    //                     redoCallback={this.props.redoCallback}  
    //                     undoCallback={this.props.undoCallback}        
    //                     canRedo={this.props.canRedo}                                  
    //                     canUndo={this.props.canUndo}                         
    //                 />
    //                 <TextEditWorkspace
    //                     logo={this.props.logo} />

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar logo={this.props.logo} 
                        goToHomeCallback={this.props.goToHomeCallback}
                        deleteLogoCallback={this.props.deleteLogoCallback} />
                <div className="row">
                    
                </div> 
            </div>
        )
    }
}

export default EditScreen