import React from 'react';
import { Link } from 'react-router-dom';
import GreetingsContainer from '../greeting/greeting_container';

class Splash extends React.Component {

    componentDidMount(){
        this.props.fetchBusinesses();
    }

    render() {

        return(
            <div className='splash-container'>
                <GreetingsContainer/>
                <div className='homepage-container'>
                    <div className='splash-header'>

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