import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}
class ReFeedback extends Component {
    state = {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
        flagged: ''
    }
    runFunction(){
        this.props.dispatch({type:'test'})
    }
    render(){
        let potato = this.props.feedback.feeling;
        return (
            <div>
                <p>{potato}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ReFeedback);