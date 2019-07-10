import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import { Link, Redirect } from 'react-router-dom';

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: '',
            rating: 0
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }
    
    getRadioVal(form, name) {
        let val;
        let radios = document.getElementById('review-form').elements[name];

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) { 
                val = radios[i].value; 
                break; 
            }
        }
        return val; 
    }

    handleClick() {
        const val = this.getRadioVal(document.getElementById('review-form'), 'rate')
        this.setState({
            rating: parseInt(val),
            business_id: this.props.business.id,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchReview(this.state).then( () => this.props.history.push(`/businesses/${this.props.business.id}`))

    }


    render() {
        if(!this.props.business) return null;
        return (
            <div className='review-form-page-div'>
                <NavBarContainer/>
                <div className='review-form-div' onSubmit={this.handleSubmit.bind(this)}>
                    <form id="review-form" className='review-form'>
                        <textarea cols="30" rows="10" placeholder='Write your review here...' onChange={this.update('body')}>{this.state.body}</textarea>
                        <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" onClick={this.handleClick.bind(this)}/>
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" onClick={this.handleClick.bind(this)}/>
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" onClick={this.handleClick.bind(this)}/>
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" onClick={this.handleClick.bind(this)}/>
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" onClick={this.handleClick.bind(this)}/>
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>
                        <button className='submit-review-button'>Submit Review</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default ReviewForm;