import React from 'react';

class GifList extends React.Component {

    render(){
        return(
            <div>
                <ul>
                {this.props.gifData.map(data => (
                 data.title.includes(this.props.userInput) ? <li key={data.id}><img src={data.images.original_still.url}></img></li> : null
                ))}
                </ul>
            </div>
        )
    }
}

export default GifList;