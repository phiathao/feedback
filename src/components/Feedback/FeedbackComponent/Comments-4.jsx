import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Comments extends Component {
    render(){
        return (
            <div>
                <p>this will be a comment input component</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Comments);