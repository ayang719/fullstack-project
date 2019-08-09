import { connect } from 'react-redux';
import SearchBar from './search_bar'
import { fetchBusinesses } from '../../actions/business_actions'

const mapStateToProps = state => ({
    businesses: state.entities.businesses,
})

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)