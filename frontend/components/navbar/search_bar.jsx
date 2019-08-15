import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getData = this.getData.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this);
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

    handleRedirect(businessId) {
        this.props.fetchReviews(businessId);
        
    }

    getData(query) {
        let businesses = Object.values(this.props.businesses);
        if(this.state.query.length === 0) {
            return <div></div>
        }
        return(
            <div className='search-results-div'>
                <ul className='search-results-ul'>
                    {businesses.map( business => {
                        if(business.name.toLowerCase().includes(query.toLowerCase())) {
                            return <li onClick={() => this.handleRedirect(business.id)} className='search-results-li'>
                                <Link className='search-result-link' onClick={() => this.handleRedirect(business.id)} to={`/businesses/${business.id}`}>{business.name}</Link>
                                   </li>
                        } else {
                            for(let i = 0; i < business.tagLabels.length; i++) {
                                let tag = business.tagLabels[i];
                                if (tag.toLowerCase().includes(query.toLowerCase())) {
                                    return <li className='search-results-li'>
                                        <Link className='search-result-link' onClick={() => this.handleRedirect(business.id)} to={`/businesses/${business.id}`}>{business.name}</Link>
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