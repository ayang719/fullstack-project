import { connect } from 'react-redux';
import { fetchBusiness,  } from '../../actions/business_actions'
import BusinessShow from './business_show'
import { fetchReviews } from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.match.params.businessId);
    const business = state.entities.businesses[businessId];
    // const reviews = business.reviews
    return {
        business,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    fetchReviews: id => dispatch(fetchReviews(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessShow)