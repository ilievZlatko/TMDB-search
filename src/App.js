import React, { Component } from 'react';
import axios from 'axios';
import { debounce, map } from 'lodash';
import { truncate } from './utils/helperMethods';

import { BASE_URL, API_KEY, IMAGE_BASE_URL } from './constants';
import SearchHeader from './containers/SearchHeader/SearchHeader';
import Card from './components/Card/Card';
import NoImage from './assets/images/no-image.png';

class App extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
  };

  debouncedSearch = debounce(this.fetchResults, 500);

  async fetchResults(query) {
    try {
      const data = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: API_KEY,
          },
        },
      );
      this.setState({ searchResults: data.data.results });
    } catch (err) {
      this.setState({ searchResults: [] });
      console.log(err);
    }
  }

  onSearch = e => {
    this.setState({ searchTerm: e.target.value }, () => {
      if (this.state.searchTerm.trim().length > 0) {
        this.debouncedSearch(this.state.searchTerm);
      }
    });
  };

  render() {
    return (
      <div className="App">
        <SearchHeader value={this.state.searchTerm} onSearch={this.onSearch} />
        <div className="container">
          {this.state.searchResults && this.state.searchResults.length > 0 ?
            map(this.state.searchResults, data => 
              <Card
                key={data.id}
                cardImage={
                  data.poster_path ? 
                  `${IMAGE_BASE_URL}${data.poster_path}` : 
                  NoImage
                }
              >
                <h4>{data.title}</h4>
                <span
                  className="date">
                  release date: {data.release_date.replace(/-/g, '.')}
                </span>
                <p className="overview">{truncate(data.overview, 100)}</p>
              </Card>
            ) : <div className="no-results">No results found!</div>
          }
        </div>
      </div>
    );
  }
}

export default App;
