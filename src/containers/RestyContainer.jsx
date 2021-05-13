import React, { Component } from 'react';
import Controls from '../components/resty/Controls';

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: 'GET',
    rawJsonBody: [],
    display: [],
    loading: true,
  };

  handleSearchChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  render() {
    console.log(this.state.url, this.state.method);
    const { loading, url, method, rawJsonBody, display } = this.state;
    // if (loading) return <h2>Loading...</h2>;
    return (
      <Controls
        urlSearch={url}
        urlSubmit={this.handleSearchSubmit}
        onChange={this.handleSearchChange}
        method={method}
      />
    );
  }
}
