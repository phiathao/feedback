import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import feedback from './feedbackReducer'; // exported as feedbackReducer but declare as feedback
import adminFeedback from './adminFeedbackReducer';


export const storeInstance = createStore(combineReducers({
    feedback,
    adminFeedback
}), applyMiddleware(logger));