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
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('business[photos]', this.state.photoFile)
        $.ajax({
            url: `api/businesses/${this.props.business.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false,
        }).then( response => console.log(response.message),
                 response => console.log(response.responseJSON))
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