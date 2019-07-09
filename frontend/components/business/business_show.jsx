import React from 'react';
import { Link } from 'react-router-dom'
import NavBarContainer from '../navbar/navbar_container';
import PhotoForm from './photo_form';

class BusinessShow extends React.Component {

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.props.fetchReviews(this.props.match.params.businessId)
    }
    render() {
        if(this.props.business === undefined) return null;
        return (
            <div>
                <NavBarContainer/>
                <div className='show-page-container'>
                    <div className='show-page'>
                        <h1 className='header-content'>
                            <div className='title'>
                                {this.props.business.name}
                            </div>
                            <div className='add-photo-button-div'>
                                <Link to={`/businesses/${this.props.business.id}/photo`}><img className='add-photo-icon' src="../../add-photo-icon.png" alt=""/></Link>
                                <Link className='add-photo-button' to={`/businesses/${this.props.business.id}/photo`}>Add Photo</Link>
                            </div>
                        </h1>
                        <div className='show-content'>              
                            <div className='info-list-div'>
                                <div className='map-div'>
                                    map will go here
                                </div>
                                <ul className='info-list'>
                                    <li className='address-li'>
                                        <img className='location-pin' src="../../location-pin.jpg" />
                                        <div className='address'>
                                            {this.props.business.address}
                                        </div>
                                    </li>
                                    <li className='phone-number-li'>
                                    <img className='phone-icon' src="../../phone-icon.jpg"/>
                                        <div className='phone-number'>
                                            {this.props.business.phone_number}
                                        </div>
                                    </li>
                                    <li className='get-directions-li'>
                                        <img className='get-directions-icon'src="../../get_directions_icon.png"/>
                                        <a className='get-directions-link'href={'https://www.google.com/maps/place/'+this.props.business.address} target="_blank">Get Directions</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='image-list'>
                                <img className='first-image' src={this.props.business.photoUrls[0]}/>
                                <img className='second-image' src={this.props.business.photoUrls[1]}/>
                                <img className='third-image' src={this.props.business.photoUrls[2]}/>
                                <footer>
                                    <Link className='photos-index-link' to={`/businesses/${this.props.business.id}/photos`}>See all Photos</Link>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div className='under-show-content'>

                        <div className='reviews-index'>
                            <div className='reviews-header'>
                                <h2>Recommended Reviews <b className='business-name'>for {this.props.business.name}</b></h2>
                            </div>
                            <div className='reviews-list-div'>
                                <ul className='reviews-list'>
                                    {/* {this.props.business.reviewIds.map(review => (<li>{review.body}</li>))} */}
                                </ul>
                            </div>
                        </div>
                        <div className='info-rail'>
                            <div className='bus-hours'>
                                <div className='hours-header'>
                                    <h3>Hours</h3>
                                </div>
                                <table className='hours-table'>
                                    <tbody>
                                        <tr>
                                            <th>Mon</th>
                                            <td>
                                                <span>11:00 am</span> - <span>9:00 pm</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Tue</th>
                                            <td>
                                                <span>11:00 am</span> - <span>9:00 pm</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Wed</th>
                                            <td>
                                                <span>11:00 am</span> - <span>9:00 pm</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Thu</th>
                                            <td>
                                                <span>11:00 am</span> - <span>9:00 pm</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Fri</th>
                                            <td>
                                                <span>11:00 am</span> - <span>9:00 pm</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Sat</th>
                                            <td>
                                                <span>11:00 am</span> - <span>9:00 pm</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Sun</th>
                                            <td>
                                                <span>11:00 am</span> - <span>9:00 pm</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='more-info-div'>
                                <div className='more-info-header'>
                                    <h3>More Business Info</h3>
                                </div>
                                <ul className='more-info-list'>
                                    <li>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Vegan Options</dt>
                                            <dd className='response'>Yes</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Takes Reservations</dt>
                                            <dd className='response'>No</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Take-out</dt>
                                            <dd className='response'>No</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Accepts Credit Cards</dt>
                                            <dd className='response'>Yes</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Accepts Apple Pay</dt>
                                            <dd className='response'>No</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Accepts Google Pay</dt>
                                            <dd className='response'>No</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Good For</dt>
                                            <dd className='response'>Lunch</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Bike Parking</dt>
                                            <dd className='response'>Yes</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Good for Kids</dt>
                                            <dd className='response'>Yes</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Good for Groups</dt>
                                            <dd className='response'>Yes</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Noise Level</dt>
                                            <dd className='response'>Average</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Outdoor Seating</dt>
                                            <dd className='response'>Yes</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>WiFi</dt>
                                            <dd className='response'>No</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Waiter Service</dt>
                                            <dd className='response'>Yes</dd>
                                        </dl>
                                        <dl className='more-info-item'>
                                            <dt className='category'>Cater</dt>
                                            <dd className='response'>No</dd>
                                        </dl>
                                    </li>
                                </ul>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessShow;