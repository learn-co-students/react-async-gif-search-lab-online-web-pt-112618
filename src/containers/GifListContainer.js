import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends React.Component {
    state = {
        gifData: [],
        value: ""
    }

    componentDidMount(){
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(jsonData => {
            this.setState({
                gifData: jsonData.data
            })
        })
    }

    searchResult = (userInput) => (this.setState({value: userInput}))

    render() {
        return(
         <div>
            <h2>Giphy Search:</h2>
            < GifSearch searchSubmit={this.searchResult} />
            
            < GifList gifData={this.state.gifData} userInput={this.state.value} />
        </div>
        )
    }

}

export default GifListContainer;
