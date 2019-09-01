import React from 'react';


class GifSearch extends React.Component {
    state = {
        userInput: ""
    }

    handleInputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            userInput: e.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.searchSubmit(this.state.userInput)
    }
   
    render() {
        return(
         <div>
             <form onSubmit={event => {this.handleSubmit(event)}}>
             <input type="text" name="name" onChange={this.handleInputChange} ></input>
             <button >Search</button>
             </form>
         </div>
        )
    }
}

export default GifSearch;