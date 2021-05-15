import React, { Component } from 'react';
import Controls from '../components/resty/Controls';
import Display from '../components/resty/Display';
import HistoryList from '../components/resty/HistoryList';
import { fetchUrl } from '../services/utils';

export default class RestyContainer extends Component {
  state = {
    url: '',
    method: 'GET',
    searchResults: {},
    body: '',
    history: [],
    loading: false,
  };

  handleSearchSubmit = async (event) => {
    event.preventDefault();
    const { url, method, body } = this.state;
    this.setState({ loading: true });
    const searchResults = await fetchUrl(url, method, body);


    this.setState(state => ({
      searchResults,
      loading: false,
      history: [...state.history, { method, url }]
    }));
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

  };

  handleSearchChange = ({ target }) => {
    this.setState({ [target.name]: target.value, });
  };
  render() {
    console.log(
      'url',
      this.state.url,
      'method',
      this.state.method,
      'body',
      this.state.body,
      'res',
      this.state.searchResults,
      'history',
      this.state.history
    );
    const { loading, url, searchResults, history } = this.state;
    if (loading) return <h2>Loading...</h2>;
    return (
      <>
        <Controls
          urlSearch={url}
          urlSubmit={this.handleSearchSubmit}
          onChange={this.handleSearchChange}
        />
        <HistoryList history={history} />
        <Display display={searchResults} />
      </>
    );
  }
}
