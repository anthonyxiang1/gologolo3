import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.bgColor,
                borderRadius: this.props.logo.borderRadius + "px",
                border: this.props.logo.borderThickness + "px solid " + this.props.logo.borderColor,
                padding: this.props.logo.padding + "px",
                margin: this.props.logo.margin + "px"
            }
        }
        return (
            <div className="col s8" style={{overflow: 'auto'}}>
                <div style={ styles.container }>
                    {this.props.logo.text}
                </div>
            </div>
        )
    }
}

export default TextEditWorkspace