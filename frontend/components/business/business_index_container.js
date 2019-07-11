import { connect } from 'react-redux';
import BusinessIndex from './business_index'
import { fetchBusinesses } from '../../actions/business_actions'
import {fetchReviews} from '../../actions/review_actions'

const mapStateToProps = state => ({
    businesses: state.entities.businesses,
    reviews: state.entities.reviews
})

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchReviews: id => dispatch(fetchReviews(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessIndex)