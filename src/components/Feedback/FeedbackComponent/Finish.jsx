import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Finish extends Component {

    nextFn = event => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p>Great! You are Finish!</p>
                <p>You can go back to change the feedback!</p>
                <br/>
                <Button onClick={this.nextFn} variant='outlined'>Go Back</Button>
            </div>
        )
    }
}

export default Finish;