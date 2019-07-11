import React from 'react';
import { Link } from 'react-router-dom';
import GreetingsContainer from '../greeting/greeting_container';

class Splash extends React.Component {



    componentDidMount(){
        this.props.fetchBusinesses();
        
    }

    render() {
        if(!this.props.businesses[1]) return null
        return(
            
            <div className='splash-container'>
                <div className='splash-header'>
                    <div className='spl-kelp-logo'>
                        <img className='spl-logo-text' src="../../coollogo_com-31684455.png" />
                        <img className='spl-logo-image' src="https://divineeventslv.com/wp-content/uploads/2018/04/yelp-logo-27.png" />
                    </div>
                    <div className='greetings-div'>
                        <GreetingsContainer/>
                    </div>
                    <img className='big-ramen' src="../../real-kelp-header.jpg"/>
                </div>
                <div className='homepage-container'>
                    <div className='rec-businesses'>
                        <h2 className='rec-businesses-header'>Find the Best Businesses</h2>
                        <div className='rec-links-div'>
                            <div className='rec-div'>
                                <Link className='rec' to={`/businesses/${this.props.businesses[4].id}`}>
                                    <div className='rec-link-div'>
                                        <img className='rec-pic' src={this.props.businesses[4].photoUrls[1]} />
                                        {this.props.businesses[4].name}
                                        <div className='tags-list'>
                                            {this.props.businesses[4].tagLabels.map(tag => (
                                                <div className='tag-label'>{tag},</div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='rec-div'>
                                <Link className='rec' to={`/businesses/${this.props.businesses[2].id}`}>
                                    <div className='rec-link-div'>
                                        <img className='rec-pic' src={this.props.businesses[2].photoUrls[0]}/>
                                        {this.props.businesses[2].name}
                                        <div className='tags-list'>
                                            {this.props.businesses[2].tagLabels.map(tag => (
                                                <div className='tag-label'>{tag},</div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='rec-div'>
                                <Link className='rec' to={`/businesses/${this.props.businesses[3].id}`}>
                                    <div className='rec-link-div'>
                                        <img className='rec-pic' src={this.props.businesses[3].photoUrls[0]}/>
                                        {this.props.businesses[3].name}
                                        <div className='tags-list'>
                                            {this.props.businesses[3].tagLabels.map(tag => (
                                                <div className='tag-label'>{tag},</div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='all-business-link-div'>
                            <Link className='all-businesses-link' to='/businesses'>See All Businesses</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;