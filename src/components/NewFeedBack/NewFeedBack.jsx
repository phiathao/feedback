import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';


class NewFeedback extends Component {

    nextFn = event => {
        this.props.dispatch({ type: 'C_FB'})
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>Thank you!</p>
                <Button onClick={this.nextFn} variant='outlined'>Leave new Feedback</Button>
            </div>
        )
    }
}


export default connect()(NewFeedback);