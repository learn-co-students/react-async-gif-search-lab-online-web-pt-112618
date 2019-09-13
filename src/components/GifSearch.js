import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Search Term</label><br/>
          <input
            type="text"
            value={this.state.query}
            onChange={event => this.setState({query: event.target.value})} /><br/>
          <input type="submit" value="Find Gifs" />
        </form>
        <br/>
      </div>
    )
  }

}

export default GifSearch
