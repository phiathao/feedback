import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Comments extends Component {
    state = {
        selectedValue: '',
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
        this.props.dispatch({ type: 'S_FB_C', payload: this.state.selectedValue })
    };
    nextFn = event => {
        this.props.dispatch({ type: 'S_FB_C', payload: this.state.selectedValue })
        this.props.history.push('/f');
    }
    render() {
        return (
            <div>
                <p>4 of 5</p>
                <TextField
                    onChange={this.handleChange}
                    id="filled-with-placeholder"
                    label="Any other comments"
                    margin="normal"
                    variant="filled"
                    className="textArea"
                />
                <br/>
                <Button onClick={this.nextFn} variant='outlined'>Next</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Comments);