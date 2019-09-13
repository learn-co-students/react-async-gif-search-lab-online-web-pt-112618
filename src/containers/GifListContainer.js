import React, { Component } from 'react';

import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
  state = {
    gifs: []
  }


  render() {
    return (
      <div>
        <GifSearch
          fetchGifs={this.fetchGifs} />
        <GifList
          gifs={this.state.gifs} />
      </div>
    );
  }

  fetchGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query} HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({gifs: data.map(gif => ({ url: gif.images.original.url }) )
      });
    })
  };

  componentDidMount(){
    this.fetchGifs()
  }
}

export default GifListContainer;
