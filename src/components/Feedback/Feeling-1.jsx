import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Feeling extends Component {
    render(){
        return (
            <div>
                <p>this will be a feeling input component</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Feeling);