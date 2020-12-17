import React from 'react';

class ProfilePictureModal extends React.Component {

    constructor(props) {
        super(props);
        this.updateProfilePicture = this.updateProfilePicture.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let user = this.props.currentUser
        // let followedUserIds = Object.values(this.props.currentUser.followed_users).map((follow) => {
        //     return follow.user_id
        // });
        console.log(props, "PROPS");
        this.state = {
            id: user.id,
            username: user.username,
            email: user.email,
            profile_picture: user.profile_picture,
            profile_picture_url: user.profile_picture_url
            // followedUserIds: followedUserIds
        }
    };

    updateProfilePicture(e) {
        e.preventDefault();
        const reader = new FileReader();
        const picture = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ profile_picture_url: reader.result, profile_picture: picture });

        }
        reader.readAsDataURL(picture);
        this.setState({ profile_picture: e.currentTarget.files[0] });


    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateProfilePicture(user);
    };

    onClose(e) {
        e.preventDefault();
        this.props.show = false;
        this.props.onClose && this.props.onClose(e);
            
       
    };
    

    
    render() {
      
        if (!this.props.show) {
            return null;
        }
        return(
            <div className='modal' id="modal">
                

                <div className='content'>Hello Modal
                    <div className='actions'>
                        <label>change profile picture
                            <form className="changeProfilePictureForm" onSubmit={this.handleSubmit}>
                                <div>
                                    <div style={{ display: "block", textAlign: "center", marginTop: "20%" }}>
                                        <label > <span className="btn">Select Image</span>
                                        <input style={{ visibility: 'hidden', position: 'absolute' }}  className="form-control" type="file" name="files" onChange={this.updateProfilePicture} />
                                        
                                        </label>

                                    </div>
                                    

                                </div>


                            </form>

                        </label>
                        
                    </div>
                                <input  type="button" value="change" className="changeProfilePictureButton" onClose={e => {
                                    this.onClose(e);
                                }} onClick={this.handleSubmit}/>
                </div>

            </div>
            
        ) 

    }
};

export default ProfilePictureModal;