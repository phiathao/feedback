import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Link }from 'react-router-dom';
import './rFeedBack.css'

const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback // only care about feedback reducer and prop name it as .feedback / this.props.feedback
    })
}
class ReFeedback extends Component {
    state = { // use mapStateToProps / feedback is from above const mapStateToProps and uses .feedback reducer
        feeling: this.props.feedback.feeling,
        understanding: this.props.feedback.understanding,
        support: this.props.feedback.support,
        comments: this.props.feedback.comments,
        flagged: this.props.feedback.flagged
    }
    handleSubmit = event => { // save to db
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
        let btn = true; // button disable check / if field are not empty turn disable to false
        if (this.state.feeling !== '' && this.state.understanding !== '' && this.state.support !== ''){
                btn = false;
        }
        return (
            <div>
                <p><Link to="/" className="aLink">Feeling : {this.state.feeling}</Link></p>
                <p><Link to="/understanding" className="aLink">Understanding : {this.state.understanding}</Link></p>
                <p><Link to="/support" className="aLink">Support : {this.state.support}</Link></p>
                <p><Link to="/comments" className="aLink">Comments : {this.state.comments}</Link></p>
                <p><Link to="/f" className="aLink">Talk to Staff : {staff}</Link></p>
                <Button onClick={this.handleSubmit} disabled={btn} variant='outlined'>Submit</Button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ReFeedback);