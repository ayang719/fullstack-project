import { connect } from 'react-redux';
import { fetchBusiness, } from '../../actions/business_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.match.params.businessId);
    const business = state.entities.businesses[businessId];
    return {
        business
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoIndex);