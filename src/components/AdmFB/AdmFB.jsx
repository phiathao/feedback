import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './AdmFB.css';
import { Button } from '@material-ui/core';


const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.adminFeedback
    })
}

class Admin123 extends Component {
    state = {
        feedback: []
    }

    componentDidMount(){
        this.getData() // initial get db function
    }

    getData = () => { // get DB feedback function
        axios.get('/feedback').then((response)=>{
            console.log(response.data)
            this.props.dispatch({type: "V_FB", payload: response.data}) //data isn't used WIP get data from reducer instead from the get
            // WIP set reducer state
            // WIP state change to reducer data instead
            this.setState({
                feedback : response.data
            })
        }).catch((error)=>{
            console.log(error);
        })
    }

    handleClick = (id) => { // delete from DB
        axios.delete(`/feedback/${id}`).then((response)=>{
            console.log(response);
            this.getData(); // update after delete
        }).catch((error)=>{
            console.log(error);
        })
    }

    render(){
        // console.log(this.state)
        return (
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Feeling</td>
                            <td>Understanding</td>
                            <td>Support</td>
                            <td>Comments</td>
                            <td>Need to See Staff</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map(feedback=>{
                            return (
                                <tr key={feedback.id}>
                                    <td>{feedback.id}</td>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <td>{feedback.flagged.toString()}</td>
                                    <td><Button variant='outlined' onClick={()=>this.handleClick(feedback.id)}>Delete</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        )
    }
}

export default connect(mapStateToProps)(Admin123);