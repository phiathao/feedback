import React, { Component } from 'react';
import Feeling from './FeedbackComponent/Feeling-1';
import Understanding from './FeedbackComponent/Understanding-2';
import Support from './FeedbackComponent/Support-3';
import Comments from './FeedbackComponent/Comments-4';
import Flag from './FeedbackComponent/Flag-5';
import ReFeedback from '../rFeedBack/rFeedBack';
import Admin from '../AdmFB/AdmFB';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, Route } from 'react-router-dom';
import './feedback.css';
import Finish from '../Feedback/FeedbackComponent/Finish';
import NewFeedback from '../NewFeedBack/NewFeedBack';

class Feedback extends Component {
    render() {
        return (
            <Router>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <Route path="/" exact component={Feeling} />
                        <Route path="/understanding" component={Understanding} />
                        <Route path="/support" component={Support} />
                        <Route path="/comments" component={Comments} />
                        <Route path="/f" component={Flag} />
                        <Route path="/finish" component={Finish} />
                    </Grid>
                    <Grid item xs={4}>
                        {/* <Route path={["/understanding", "/support", "/comments", "/f", "/"]} component={ReFeedback} /> */}
                        {["/understanding", "/support", "/comments", "/f", "/", "/finish"].map((path, i) => <Route path={path} exact component={ReFeedback} key={i} />)}
                    </Grid>
                    <Grid item xs={12}>
                        <Route path="/123admin" exact component={Admin} />
                        {/* path to see admin view */}
                        <Route path="/new" exact component={NewFeedback} />
                    </Grid>
                </Grid>
            </Router>
        )
    }
}

export default Feedback;