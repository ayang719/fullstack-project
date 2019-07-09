import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import { Link, Redirect } from 'react-router-dom'


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
        }).then(() => this.props.history.push(`/businesses/${this.props.business.id}/photos`))
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render() {
        if (!this.props.business) return null;
        return (
            <div>
                <NavBarContainer/>
                <div className='photo-form-page'>
                    <h2 className='show-link-h2'>
                        <Link className='show-link' to={`/businesses/${this.props.business.id}`}>{this.props.business.name}:</Link>
                        <b className='add-photos-text'> Add Photos</b>
                    </h2>
                    <div className='link-to-pi-div'>
                        <Link className='link-to-pi' to={`/businesses/${this.props.business.id}/photos`}>View all Photos</Link>
                    </div>
                    <div className='upload-form-div'>
                        <form className='upload-form' onSubmit={this.handleSubmit.bind(this)}>
                            <input className='file-input'type="file"
                                onChange={this.handleFile.bind(this)}/>
                            <fieldset className='dividing-line'></fieldset>
                            <button className='submit-photo-button'>Add Photo</button>
                        </form>
                    </div>
                    <div className='image-rules-div'>
                        <div className='image-rule'>
                            <img className='first-rule-image' src="https://s3-media1.fl.yelpcdn.com/assets/2/www/img/882475dcd052/photo_upload/shaky.png"/>
                            <div className='rule-text'>
                                Refrain from posting shaky or out of focus photos.
                            </div>
                        </div>
                        <div className='image-rule'>
                            <img className='second-rule-image' src="https://s3-media1.fl.yelpcdn.com/assets/2/www/img/fa6ae3a94ca7/photo_upload/camera-flash.png"/>
                            <div className='rule-text'>
                                Your photos should be well lit and bright. Don’t be afraid to use the flash on your camera.
                            </div>
                        </div>
                        <div className='image-rule'>
                            <img className='third-rule-image' src="https://s3-media2.fl.yelpcdn.com/assets/2/www/img/5ac6cb0f2678/photo_upload/filters.png"/>
                            <div className='rule-text'>
                                If you’re applying filters, don’t overdo them. Subtlety is key.
                            </div>
                        </div>
                        <div className='image-rule'>
                            <img className='fourth-rule-image' src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/babf51178afb/photo_upload/biz-photos.png"/>
                            <div className='rule-text'>
                                Lastly, please only post photos of the business.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoForm