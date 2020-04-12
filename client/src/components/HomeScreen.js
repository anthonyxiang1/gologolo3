import React, { Component } from 'react';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {

    render() {

        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <div className="container row">
                            <div className="col s4">
                                <div id="recent_work_container">
                                    <h3>Recent Work</h3>
                                </div>

                                <div id="home_recent_work_list">
                                {data.logos.sort((a, b) => b.lastUpdate.toString().localeCompare(a.lastUpdate.toString())).map((logo, index) => (
                                    <div key={index} id="links">
                                        <a href={`/view/${logo._id}`} id='home_logo_link' style={{ textDecoration: 'none' }}>{logo.text}</a>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <div className="col s8">
                                <div id="home_banner_container">
                                    GoLogoLo
                                </div>
                                <div id="create_button">
                                <a href="/create"  class="btn btn-primary">Create New Logo</a>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
