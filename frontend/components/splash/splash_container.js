import { connect } from 'react-redux';
import Splash from './splash';
import { fetchBusinesses } from '../../actions/business_actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash)