import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';

class PhotoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render() {
        if (!this.props.business) return null;

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
                                    {this.props.business.name}
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