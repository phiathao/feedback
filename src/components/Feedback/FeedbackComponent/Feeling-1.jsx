import React, { Component } from 'react';
import { connect } from 'react-redux';
import './feedback.css';
import Radio from '@material-ui/core/Radio'


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Feeling extends Component {
    state = {
        selectedValue: '',
      };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };
    render(){
        return (
            <div>
                    <p>How are you feeling today?</p>
                    <span>I'm very stressed.</span>
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
                    <span>I'm feeling great!</span>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Feeling);