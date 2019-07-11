import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom'
import { starRating, starRatingHead } from './star_rating';

class BusinessIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBusinesses();
        
    }

    render() {
        if(!this.props.businesses[1]) return null;
        let businesses = Object.values(this.props.businesses)
        return(
            <div className='business-index-container'>
                <NavBarContainer />
                <div className='business-index'>
                <h2 className='business-index-header'>All Businesses</h2>
                    {businesses.map( business => {

                        let ratings = business.reviewRatings;
                        const businessRating = (reviews) => {  
                            let sum = 0;
                            reviews.forEach(review => sum += review);
                            let rating = sum / reviews.length;
                            console.log(rating);
                            return rating;
                        }

                        return (
                            <div className='index-item-div'>
                                <img className='index-photo' src={business.photoUrls[0]}/>
                                <div className='item-info-div'>
                                    <div className='item-title-div'>
                                        <div>
                                            <Link className='business-name-link'to={`/businesses/${business.id}`}><h3>{business.name}</h3></Link>
                                            <div className='index-review-div'>
                                                {starRating(businessRating(ratings))}
                                                <div className='review-amount-idx'>
                                                    {business.reviewRatings.length} reviews
                                                </div> 
                                                <div className='idx-tags'>
                                                    {business.tagLabels.map(tag => (
                                                        <div className='tag-label'>{tag},</div>
                                                    ))}
                                                </div> 
                                            </div>
                                        </div>
                                        <div className='index-phone-number'>
                                            {business.phone_number}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default BusinessIndex