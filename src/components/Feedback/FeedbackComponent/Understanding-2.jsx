import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { Button } from '@material-ui/core';

const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Understanding extends Component {
    state = {
        selectedValue: '',
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };
    nextFn = event => {
        if (this.state.selectedValue === '') {
            return alert('Select One');
        }
        this.props.dispatch({ type: 'S_FB_U', payload: this.state.selectedValue })
        this.props.history.push('/support');
    }
    render() {
        return (
            <div>
                <p>2 of 5</p>
                <p>How well did you understand today's material?</p>
                <span>I'm totally lost.</span>
                <Radio
                    checked={this.state.selectedValue === '1'}
                    onChange={this.handleChange}
                    value="1"
                    name="radio-feeling"
                />
                <Radio
                    checked={this.state.selectedValue === '2'}
                    onChange={this.handleChange}
                    value="2"
                    name="radio-feeling"
                />
                <Radio
                    checked={this.state.selectedValue === '3'}
                    onChange={this.handleChange}
                    value="3"
                    name="radio-feeling"
                />
                <Radio
                    checked={this.state.selectedValue === '4'}
                    onChange={this.handleChange}
                    value="4"
                    name="radio-feeling"
                />
                <Radio
                    checked={this.state.selectedValue === '5'}
                    onChange={this.handleChange}
                    value="5"
                    name="radio-feeling"
                />
                <span>I've got this!</span>
                <Button onClick={this.nextFn} variant='outlined'>Next</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Understanding);