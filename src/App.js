import React, { Component } from 'react';

import SearchHeader from './containers/SearchHeader/SearchHeader';

class App extends Component {
  state = {
    value: '',
    searchResults: []
  }

  onSearch = e => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <SearchHeader
          value={this.state.value}
          onSearch={this.onSearch}
        />
      </div>
    );
  }
}

export default App;
