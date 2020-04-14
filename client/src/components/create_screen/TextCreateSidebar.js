import React, { Component } from 'react';
import {Range, Button} from 'react-materialize'
import { withRouter } from 'react-router';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $bgColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderThickness: Int!,
        $padding: Int!,
        $margin: Int!) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            bgColor: $bgColor,
            borderColor: $borderColor,
            borderRadius: $borderRadius,
            borderThickness: $borderThickness,
            padding: $padding,
            margin: $margin
            ) {
            _id
        }
    }
`;

class TextCreateSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: 'Sample',
            textColor : "#3647e4",
            fontSize : 24,
            bgColor : "#b7c9f7",
            borderColor : "#bb68cc",
            borderRadius : 0,
            borderThickness : 5,
            padding : 0,
            margin : 0,
            emptyText: false,
            deleteModalVisible: false,
        }
    }

    handleTextChange = (event) => {
        if (event.target.value === "") {
            this.setState({ text: event.target.value, emptyText : true});
        }
        else {
        this.setState({ text: event.target.value, emptyText: false });
        }
    }

    handleTextColorChange = (event) => {
        this.setState({ textColor: event.target.value });
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
        console.log(this.state)
    }

    render() {
        const styles = {
            container: {
                color: this.state.textColor,
                fontSize: this.state.fontSize + "pt",
                backgroundColor: this.state.bgColor,
                borderRadius: this.state.borderRadius + "px",
                border: this.state.borderThickness + "px solid " + this.state.borderColor,
                padding: this.state.padding + "px",
                margin: this.state.margin + "px"
            }
        }

        return (
            <Mutation mutation={ADD_LOGO} onCompleted={(data) => this.props.history.push('/view/' + data.addLogo._id)}>
                {(addLogo, { loading, error }) => (
            <div className="col">
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="submit">
                            <Button className="btn-success" style={ {cursor: "pointer"} } disabled={this.state.emptyText}  onClick={e => {
                                    e.preventDefault();
                                    addLogo({ variables: { text: this.state.text, color: this.state.textColor, fontSize: parseInt(this.state.fontSize), 
                                        bgColor: this.state.bgColor, borderColor: this.state.borderColor, 
                                        borderRadius: parseInt(this.state.borderRadius), borderThickness: parseInt(this.state.borderThickness), 
                                        padding: parseInt(this.state.padding), margin: parseInt(this.state.margin) } });
                                    this.setState({ 
                                        text: 'Sample',
                                        textColor : "#3647e4",
                                        fontSize : 24,
                                        bgColor : "#b7c9f7",
                                        borderColor : "#bb68cc",
                                        borderRadius : 0,
                                        borderThickness : 5,
                                        padding : 0,
                                        margin : 0

                                    });
                                }}>
                                    Submit</Button>
                        </div>

                    <div style={{paddingTop: '5', paddingBottom: '0'}} className="card-content white-text">
                        
                        <span className="card-title">Text</span>

                        <div className="row">
                            <div className="col s4">Title:</div>
                                <div className="col s8">
                                    <input type="text"
                                            onChange={this.handleTextChange}
                                            value={this.state.text}
                                    />
                                </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Color:</div>
                                <div className="col s8">
                                    <input type="color"
                                            onChange={this.handleTextColorChange}
                                            value={this.state.textColor}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                                <div className="col s8">
                                    <input type="color"
                                            onChange={this.handleBgColorChange}
                                            value={this.state.bgColor}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range min="4" max="100" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.state.fontSize} />
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
                                            value={this.state.borderColor}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Radius:</div>
                            <div className="col s8">
                                <Range min="0" max="100" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.state.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Thickness:</div>
                            <div className="col s8">
                                <Range min="0" max="200" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.state.borderThickness} />
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
                                            value={this.state.padding}
                                    />
                                </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range min="0" max="100" 
                                    onChange={this.handleMarginChange}
                                    value={this.state.margin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col s8" style={{overflow: 'auto'}}>
                <div style={{display: 'inline-block'}}>
                <div style={ styles.container}>
                    {this.state.text}
                </div>
                </div>
            </div>
            
            </div>
            )}
            </Mutation>
        )
    }
}

export default withRouter(TextCreateSidebar)