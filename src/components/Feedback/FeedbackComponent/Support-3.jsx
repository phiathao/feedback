import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { Button } from '@material-ui/core';

const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Support extends Component {
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
        this.props.dispatch({ type: 'S_FB_S', payload: this.state.selectedValue })
        this.props.history.push('/comments');
    }
    render() {
        return (
            <div>
                <p>Did you feel supported by Prime staff today?</p>
                <span>I feel abandoned.</span>
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
                <span>I feel supported!</span>
                <Button onClick={this.nextFn} variant='outlined'>Next</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Support);