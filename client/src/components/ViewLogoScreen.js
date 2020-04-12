import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import NavbarNorm from './create_screen/NavbarNorm.js'

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            bgColor
            borderColor
            borderRadius
            borderThickness
            padding
            margin
            lastUpdate
        }
    }
`;

const DELETE_LOGO = gql`
  mutation removeLogo($id: String!) {
    removeLogo(id:$id) {
      _id
    }
  }
`;

class ViewLogoScreen extends Component {

    render() {
        
        return (
            <Query pollInterval={500} query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    const styles = {
                        container: {
                            color: data.logo.color,
                            fontSize: data.logo.fontSize + "pt",
                            backgroundColor: data.logo.bgColor,
                            borderRadius: data.logo.borderRadius + "px",
                            border: data.logo.borderThickness + "px solid " + data.logo.borderColor,
                            padding: data.logo.padding + "px",
                            margin: data.logo.margin + "px"
                        }
                    }
                    
                    return (
                        <div className="container">
                                <div className="panel-heading">
                                    <NavbarNorm/>
                                </div>

                            <div className="row">
                                <div id="leftside">
                                    <dl>
                                        <dt>Text:</dt>
                                        <dd>{data.logo.text}</dd>
                                        <dt>Color:</dt>
                                        <div className="box" style={{background: data.logo.color}}></div>
                                        <dt>Font Size:</dt>
                                        <dd>{data.logo.fontSize} pt</dd>
                                        <dt>Background Color:</dt>
                                        <div className="box" style={{background: data.logo.bgColor}}></div>
                                        <dt>Border Color:</dt>
                                        <div className="box" style={{background: data.logo.borderColor}}></div>
                                        <dt>Border Radius:</dt>
                                        <dd>{data.logo.borderRadius} px</dd>
                                        <dt>Border Thickness:</dt>
                                        <dd>{data.logo.borderThickness} px</dd>
                                        <dt>Padding:</dt>
                                        <dd>{data.logo.padding} px</dd>
                                        <dt>Margin:</dt>
                                        <dd>{data.logo.margin} px</dd>
                                        <dt>Last Updated:</dt>
                                        <dd>{data.logo.lastUpdate}</dd>
                                    </dl>
                                    <Mutation mutation={DELETE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push('/')}>
                                        {(removeLogo, { loading, error }) => (
                                            <div>
                                                <form
                                                    onSubmit={e => {
                                                        e.preventDefault();
                                                        removeLogo({ variables: { id: data.logo._id } });
                                                    }}>
                                                    <Link to={`/edit/${data.logo._id}`} className="btn btn-success">Edit</Link>&nbsp;
                                                <button type="submit" className="btn btn-danger">Delete</button>
                                                </form>
                                                {loading && <p>Loading...</p>}
                                                {error && <p>Error :( Please try again</p>}
                                            </div>
                                        )}
                                    </Mutation>
                                </div>

                                <div style={{ overflow: 'auto'}}>
                                    <div style={ styles.container }>
                                        {data.logo.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default ViewLogoScreen;