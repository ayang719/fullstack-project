import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    componentDidMount(){
        this.props.fetchBusinesses();
    }

    render() {

        return(
            <div className='splash-container'>
                <div className='homepage-container'>
                    <div className='splash-header'>
                        <Link to='/login'>Log In</Link>
                        Or
                        <Link to='signup'>Sign Up</Link>
                    </div>
                    <div className='rec-businesses'>
                        <Link to='/businesses/1'>Mc'Donalds</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Splash;