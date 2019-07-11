import { connect } from 'react-redux';
import Splash from './splash';
import { fetchBusinesses } from '../../actions/business_actions'
import { fetchUsers } from '../../actions/session_actions'

const mapStateToProps = state => ({
    businesses: state.entities.businesses
})

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash)