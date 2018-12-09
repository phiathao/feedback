import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Admin123 extends Component {
    render(){
        return (
            <div>
                <p>this will be admin view</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Admin123);