// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES

import React, { Component } from 'react'
import NavbarNorm from '../create_screen/NavbarNorm.js'
import TextEditSidebar from './TextEditSidebar.js'

export class EditScreen extends Component {

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <NavbarNorm/>
                <div className="row">
                    <TextEditSidebar/>
                    
                </div> 
            </div>
        )
    }
}

export default EditScreen