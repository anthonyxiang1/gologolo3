import React, { Component } from 'react';
import {Button, Modal, TextInput, Range} from 'react-materialize'

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: this.props.logo.text,
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            bgColor : this.props.logo.bgColor,
            borderColor : this.props.logo.borderColor,
            borderRadius : this.props.logo.borderRadius,
            borderThickness : this.props.logo.borderThickness,
            padding : this.props.logo.padding,
            margin : this.props.logo.margin,
            temptext: "",
            emptyText: true
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props !== prevProps){
            this.setState({
                text: this.props.logo.text,
                textColor : this.props.logo.textColor,
                fontSize : this.props.logo.fontSize,
                bgColor : this.props.logo.bgColor,
                borderColor : this.props.logo.borderColor,
                borderRadius : this.props.logo.borderRadius,
                borderThickness : this.props.logo.borderThickness,
                padding : this.props.logo.padding,
                margin : this.props.logo.margin,
            })
        }
    }

    componentDidMount = () => {
        //console.log("\tEditScreen component did mount");
        document.addEventListener('keydown',this.handleKeyPress)
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown',this.handleKeyPress)
    }

    handleKeyPress = (event) => {
        var evtobj = window.event? event : event
        if (evtobj.keyCode === 90 && evtobj.ctrlKey){
            this.setState(this.handleUndo)
            }
        if (evtobj.keyCode === 89 && evtobj.ctrlKey){
            this.setState(this.handleRedo)
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleEdit = () => {
        var regex = "^\\s*$"
        console.log(this.props.logo)
        if (this.state.temptext.match(regex))
            console.log("INVALID INPUT")
        else
            this.setState({ text: this.state.temptext }, this.completeUserEditing);
    }

    handleTextChange = (event) => {
        this.setState({ temptext: event.target.value });
    }

    handleTextColorChange = (event) => {
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBgColorChange = (event) => {
        this.setState({ bgColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log(localStorage.recent_work)
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, 
                                    this.state.textColor, this.state.fontSize, this.state.bgColor, this.state.borderColor,
                                    this.state.borderRadius, this.state.borderThickness, this.state.padding, this.state.margin);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if (redoDisabled)
            redoClass += " disabled";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">

                <div className="card-content white-text">
                        <Modal header="Edit text name" trigger={<button className="waves-effect waves-light btn-small">&#9998;</button>}>
                            <TextInput defaultValue='' onChange={this.handleTextChange}> </TextInput>
                            <Button className="modal-close" style={ {cursor: "pointer"} }  onClick={this.handleEdit}>Confirm</Button>
                            {this.state.temptext.match("^\\s*$") ? <span className="red-text">Logo text must be non-empty!</span> : null}
                        </Modal>
                        
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>

                    <div style={{paddingTop: '10', paddingBottom: '0'}} className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                                <div className="col s8">
                                    <input type="color"
                                            onChange={this.handleTextColorChange}
                                            value={this.props.logo.textColor}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                                <div className="col s8">
                                    <input type="color"
                                            onChange={this.handleBgColorChange}
                                            value={this.props.logo.bgColor}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                    </div>

                    <div style={{paddingTop: '0', paddingBottom: '0'}} className="card-content white-text">
                        <span className="card-title">Border</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                                <div className="col s8">
                                    <input type="color"
                                            onChange={this.handleBorderColorChange}
                                            value={this.props.logo.borderColor}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Radius:</div>
                            <div className="col s8">
                                <Range min="0" max="100" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Thickness:</div>
                            <div className="col s8">
                                <Range min="0" max="200" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                        </div>
                    </div>

                    <div style={{paddingTop: '0', paddingBottom: '0'}} className="card-content white-text">
                        <span className="card-title">Location</span>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                                <div className="col s8">
                                <Range min="0" max="100" 
                                            onChange={this.handlePaddingChange}
                                            value={this.props.logo.padding}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range min="0" max="100" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar