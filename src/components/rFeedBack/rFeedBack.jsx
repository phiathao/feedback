import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';

const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}
class ReFeedback extends Component {
    state = {
        feeling: this.props.feedback.feeling,
        understanding: this.props.feedback.understanding,
        support: this.props.feedback.support,
        comments: this.props.feedback.comments,
        flagged: this.props.feedback.flagged
    }
    handleSubmit = event => {
        if (this.state.feeling === '' || this.state.understanding === '' || this.state.support === '') {
            return alert('Feedback is NOT complete!')
        }
        axios.post('/feedback', this.state).then(response => {
            console.log(response)
        })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                <p>Feeling : {this.state.feeling}</p>
                <p>Understanding : {this.state.understanding}</p>
                <p>Support : {this.state.support}</p>
                <p>Comments : {this.state.comments}</p>
                <Button onClick={this.handleSubmit} variant='outlined'>Submit</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ReFeedback);