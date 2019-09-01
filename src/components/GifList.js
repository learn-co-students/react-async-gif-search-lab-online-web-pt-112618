import React from 'react';

class GifList extends React.Component {

    render(){
        return(
            <div>
                <ul>
                {this.props.gifData.map(data => (
                 data.slug.includes(this.props.userInput) ? <li key={data.id}>{data.slug}:<br></br>{data.images.original_still.url}</li> : null
                ))}
                </ul>
            </div>
        )
    }
}

export default GifList;