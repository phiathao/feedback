import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { Button } from '@material-ui/core';

const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Flag extends Component {
    state = {
        selectedValue: '',
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
        this.props.dispatch({ type: 'S_FB_FL', payload: this.state.selectedValue }) 
    };
    nextFn = event => {
        this.props.dispatch({ type: 'S_FB_FL', payload: this.state.selectedValue })
        this.props.history.push('/finish');
    }
    render() {
        return (
            <div>
                <p>5 of 5</p>
                <p>Would you like someone from Prime support staff to talk with you?</p>
                <span>Yes</span>
                <Radio
                    checked={this.state.selectedValue === "1"}
                    onChange={this.handleChange}
                    value="1"
                    name="radio-feeling"
                />
                <span>No</span>
                <Radio
                    checked={this.state.selectedValue === "2"}
                    onChange={this.handleChange}
                    value="2"
                    name="radio-feeling"
                />
                <Button onClick={this.nextFn} variant='outlined'>Next</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Flag);