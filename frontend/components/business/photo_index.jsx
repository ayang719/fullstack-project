import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';
import { starRating, starRatingHead } from './star_rating';


class PhotoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render() {
        if (!this.props.business) return null;
        const businessRating = (reviews) => {
            let sum = 0;
            reviews.forEach(review => sum += review);
            let rating = sum / reviews.length;
            console.log(rating);
            return rating;
        }
        return (
            <div>
                <NavBarContainer/>
                <div className='photo-index-page'>
                    <div className='photo-index-header'>
                        <h1><b>Photos For </b>{this.props.business.name}</h1>
                        <div className='under-header-pi'>
                            <div className='mini-business-link'>
                                <Link className='mini-link-text' to={`/businesses/${this.props.business.id}`}>
                                    <img className='pi-link-photo' src={this.props.business.photoUrls[0]}/>
                                    <div className='photo-index-stars'>
                                        {this.props.business.name}
                                        {starRating(businessRating(this.props.business.reviewRatings))}
                                    </div>
                                </Link>

                            </div>
                            <div className='to-upload-div'>
                                <Link className='pi-upload-link'to={`/businesses/${this.props.business.id}/photo`}>
                                    Add Photo
                                </Link>
                            </div>
                        </div>
                        <div className='image-index-list-div'>
                            <ul className='image-index-list'>
                                {this.props.business.photoUrls.map( url => (
                                    <li><img className='image-index-item' src={url}/></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoIndex;