import React from 'react';
import { Link } from 'react-router-dom'

class BusinessShow extends React.Component {

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }
    render() {
        if(this.props.business === undefined) return null;
        return (
            <div className='show-page'>
                <h1>
                    {this.props.business.name}
                </h1>
                <ul className='image-list'>
                    <li className='first-image-li'>
                        <img className='first-image' src={this.props.business.photoUrls[0]}/>
                    </li>
                    <li className='second-image-li'>
                        <img className='second-image' src={this.props.business.photoUrls[1]}/>
                    </li>
                    <li className='third-image-li'>
                        <img className='second-image' src={this.props.business.photoUrls[2]}/>
                    </li>
                </ul>
                <div className='info-list'>
                    <ul>
                        <li>
                            {this.props.business.address}
                        </li>
                        <li>
                            {this.props.business.phone_number}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BusinessShow;