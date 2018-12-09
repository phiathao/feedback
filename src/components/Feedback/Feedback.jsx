import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feeling from './Feeling-1';
import Understanding from './Understanding-2';
import Support from './Support-3';
import Comments from './Comments-4';
import Flag from './Flag-5';
import ReFeedback from '../rFeedBack/rFeedBack';
import Admin from '../AdmFB/AdmFB';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, Route} from 'react-router-dom';



const mapStateToProps = (reduxStore) => {
    return ({
        feedback: reduxStore.feedback
    })
}

class Feedback extends Component {
    render(){
        return (
                <Router>
                    <Grid container spacing={24}>
                        <Grid item xs={8}>
                            <Route path="/" exact component={Feeling} />
                            <Route path="/understanding" component={Understanding} />
                            <Route path="/support" component={Support} />
                            <Route path="/comments" component={Comments} />
                            <Route path="/f" component={Flag} />
                        </Grid>
                        <Grid item xs={4}>
                            {/* <Route path={["/understanding", "/support", "/comments", "/f", "/"]} component={ReFeedback} /> */}
                            {["/understanding", "/support", "/comments", "/f", "/"].map((path, i) => <Route path={path} exact component={ReFeedback} key={i} /> )}
                        </Grid>
                        <Grid item xs={12}>
                            <Route path="/123admin" exact component={Admin} />
                        </Grid>
                    </Grid>
                </Router>
        )
    }
}

export default connect(mapStateToProps)(Feedback);