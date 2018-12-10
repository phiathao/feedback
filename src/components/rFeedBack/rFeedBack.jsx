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
        axios.post('/feedback', this.state).then(response => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        this.props.history.push('/new');
    }
    render() {
        let staff; // display true / false to yes or no
        if (this.state.flagged === '1') {
            staff = 'Yes';
        } else {
            staff = 'No';
        }
        let btn = true; // button disable check
        if (this.state.feeling !== '' && this.state.understanding !== '' && this.state.support !== ''){
                btn = false;
        }
        return (
            <div>
                <p>Feeling : {this.state.feeling}</p>
                <p>Understanding : {this.state.understanding}</p>
                <p>Support : {this.state.support}</p>
                <p>Comments : {this.state.comments}</p>
                <p>Talk to Staff : {staff}</p>
                <Button onClick={this.handleSubmit} disabled={btn} variant='outlined'>Submit</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ReFeedback);