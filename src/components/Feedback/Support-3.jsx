import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Support extends Component {
    render(){
        return (
            <div>
                <p>this will be a support input component</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Support);