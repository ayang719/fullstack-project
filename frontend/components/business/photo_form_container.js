import { connect } from 'react-redux';
import { fetchBusiness, } from '../../actions/business_actions';
import PhotoForm from './photo_form';

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
)(PhotoForm);