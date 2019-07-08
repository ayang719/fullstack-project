import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class PhotoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photoFile: null
        };
    }

    // handleInput(e) {
    //     e.preventDefault();
    //     this.setState({})
    // }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('business[photos][]', this.state.photoFile[0]);
        formData.append('business[name]', this.props.business.name);
        formData.append('business[address]', this.props.business.address);
        formData.append('business[phone_number]', this.props.business.phone_number);
        // debugger;
        $.ajax({
            url: `api/businesses/${this.props.business.id}`,
            method: 'PATCH',
            data: formData,
            processData: false,
            contentType: false
        })
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render() {
        console.log(this.state);
        if (!this.props.business) return null;
        return (
            <div className='photo-form-page'>
                <NavBarContainer/>
                <h1>{this.props.business.name}</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="file"
                        onChange={this.handleFile.bind(this)}/>
                    <button>Add Photo</button>
                </form>
            </div>
        )
    }
}

export default PhotoForm