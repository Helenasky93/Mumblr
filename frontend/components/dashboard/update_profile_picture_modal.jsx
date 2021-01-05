import React from 'react';

class ProfilePictureModal extends React.Component {

    constructor(props) {
        super(props);
        this.updateProfilePicture = this.updateProfilePicture.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let user = this.props.currentUser
        
        
        this.state = {
            id: user.id,
            username: user.username,
            email: user.email,
            profile_picture: user.profile_picture,
            profile_picture_url: user.profile_picture_url
           
        }
    };

    updateProfilePicture(e) {
        const reader = new FileReader();
        const picture = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ profile_picture_url: reader.result, profile_picture: picture });
            
        }
        reader.readAsDataURL(picture);
        this.setState({ profile_picture: e.currentTarget.files[0] });
        

    };

    handleSubmit(e) {
        const user = Object.assign({}, this.state);
        this.props.updateProfilePicture(user);
        this.props.onClose();
    };

    

    
    render() {
      
        if (!this.props.show) {
            return null;
        }
        return(
            <div className="newPostFormDiv" style={{display:"block"}}>

            <div className='modal' id="modal">
                

                <div className='content'>
                    <div className='actions'>
                        <label className="change-picture-label">
                            <form className="changeProfilePictureForm" style={{marginTop:"20%"}}>
                                <div>
                                    <div style={{ display: "block", textAlign: "center"}}>
                                        <label > <span className="btn">Select Image</span>
                                        <input style={{ visibility: 'hidden', position: 'absolute' }}  className="form-control" type="file" name="files" onChange={this.updateProfilePicture} />
                                        
                                        </label>

                                    </div>
                                    

                                </div>

                                <input style={{marginTop:"20px"}}  type="button" value="save" className="changeProfilePictureButton" onClick={this.handleSubmit}/>

                            </form>

                        </label>
                        
                    </div>
                </div>

            </div>
            </div>
            
        ) 

    }
};

export default ProfilePictureModal;