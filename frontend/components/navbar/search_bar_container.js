import { connect } from 'react-redux';
import SearchBar from './search_bar'
import { fetchBusinesses } from '../../actions/business_actions'
import {fetchReviews} from '../../actions/review_actions'
const mapStateToProps = state => ({
    businesses: state.entities.businesses,
})

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchReviews: id => dispatch(fetchReviews(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)