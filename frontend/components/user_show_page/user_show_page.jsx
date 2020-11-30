import React from 'react';

class UserShowPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <hgroup>
                    <button onClick={this.props.logout}>Logout</button>
                    <br/>
                    <button>Home</button>
                </hgroup>
        WAP { this.props.match.params.id }
            </div >
        )
    }
}

// export default function(props) {
//     return(
//         <div>
//             WAP {props.match.params.id}
//         </div>
//     )
// };

export default UserShowPage;
