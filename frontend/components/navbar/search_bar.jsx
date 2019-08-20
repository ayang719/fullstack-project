import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            location: 'San Francisco'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getData = this.getData.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        // this.forceUpdate = this.forceUpdate.bind(this)
    }
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    componentWillUnmount() {
        this.forceUpdate()
    }

    handleInputChange() {
        this.setState({
            query: this.search.value
        })
    }

    handleSelect() {
        this.setState({
            location: this.loc.value
        })

    }

    handleRedirect(businessId) {
        this.props.fetchReviews(businessId);
        this.setState({
            query: ''
        })
    }

    getData(query) {
        let businesses = Object.values(this.props.businesses);
        if(this.state.query.length === 0) {
            return <div></div>
        }

        let latBounds = [0,0];
        let lngBounds = [0,0];

        if(this.state.location === 'San Francisco') {
            latBounds[0] = 37.773972 - 1;
            latBounds[1] = 37.773972 + 1;
            lngBounds[0] = -122.431297 - 1;
            lngBounds[1] = -122.431297 + 1;
        } else if (this.state.location === 'Chicago'){
            latBounds[0] = 41.881832 - 1;
            latBounds[1] = 41.881832 + 1;
            lngBounds[0] = -87.623177 - 1;
            lngBounds[1] = -87.623177 + 1;
        } 

        return(
            <div className='search-results-div'>
                <ul className='search-results-ul'>
                    {businesses.map( business => {
                        if (business.name.toLowerCase().includes(query.toLowerCase()) && (business.lat > latBounds[0] && business.lat < latBounds[1]) && (business.lng > lngBounds[0] && business.lng < lngBounds[1])) {
                            return <li onClick={() => this.handleRedirect(business.id)} className='search-results-li'>
                                <Link className='search-result-link' onClick={() => this.handleRedirect(business.id)} to={`/businesses/${business.id}`}> <img className='search-result-img' src={business.photoUrls[0]} /><b className='search-result-title'>{business.name}</b></Link>
                                   </li>
                        } else {
                            for(let i = 0; i < business.tagLabels.length; i++) {
                                let tag = business.tagLabels[i];
                                if (tag.toLowerCase().includes(query.toLowerCase()) && (business.lat > latBounds[0] && business.lat < latBounds[1]) && (business.lng > lngBounds[0] && business.lng < lngBounds[1])) {
                                    return <li className='search-results-li'>
                                        <Link className='search-result-link' onClick={() => this.handleRedirect(business.id)} to={`/businesses/${business.id}`}><img className='search-result-img' src={business.photoUrls[0]} /><b className='search-result-title'>{business.name}</b></Link>
                                    </li>
                                }
                            }
                        }
                    })}
                </ul>
            </div>
        )
    }

    render() {
        if(!this.props.businesses[1]) return null;
        let businesses = Object.values(this.props.businesses);
        return(
            <div className='search-bar-main-div'>
                <div className='search-bar-wrap'>   
                    <div className='find'>Find</div>
                    <form className='search-bar-form'>
                        <input className='search-bar-input' 
                        placeholder='Search for...'
                        ref={input => this.search = input}
                        type="text"
                        onChange={this.handleInputChange}/>
                        <div className='near'>Near</div>
                        <select name="locations" 
                            className='location-selector'
                            ref={inp => this.loc = inp}
                            onChange={this.handleSelect}>
                            {/* <option value="Search Area..."></option> */}
                            <option value="San Francisco">San Francisco</option>
                            <option value="Chicago">Chicago</option>
                        </select>
                    </form>
                </div>
                <div className='suggestions-div'>
                    
                    {this.getData(this.state.query)}
                </div>
            </div>
        )
    }
}

export default SearchBar;