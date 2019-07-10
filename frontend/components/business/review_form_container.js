import { connect } from 'react-redux';
import { fetchBusiness, } from '../../actions/business_actions';
import ReviewForm from './review_form';
import {fetchReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.match.params.businessId);
    const business = state.entities.businesses[businessId];
    return {
        business
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    fetchReview: review => dispatch(fetchReview(review))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm);