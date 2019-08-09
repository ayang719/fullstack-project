import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        if(!this.props.businesses[1]) return null;
        let businesses = Object.values(this.props.businesses);
        return(
            <div className='search-bar-main-div'>
                SearchBar
            </div>
        )
    }
}

export default SearchBar;