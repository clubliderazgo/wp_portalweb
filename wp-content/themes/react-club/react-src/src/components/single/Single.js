import React from 'react';
import axios from 'axios';

export class Single extends React.Component {
    state = {
        data: [],
        isLoaded: false
    }
 
    componentDidMount () {
        axios.get('/wp-json/wp/v2/posts/')
        .then(res => this.setState({
            data: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        return (
            <div></div>
        )
    }
}
 

export default Single;
