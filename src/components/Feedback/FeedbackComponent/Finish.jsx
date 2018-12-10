import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Finish extends Component {
    nextFn = event => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>Great! You are almost done!</p>
                <p>You can go back to change the feedback!</p>
                <br/>
                <Button onClick={this.nextFn} variant='outlined'>Go Back</Button>
                <p>Or click on the Submit Button</p>
            </div>
        )
    }
}

export default Finish;