import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Feedback extends Component {
    render(){
        return (
            <div>
                <p>this will be a feeling input component</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Feedback);