
const initialState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    flagged: ''
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case "S_FB_F": // Save Feedback Feeling
            return { ...state, feeling: action.payload };
        case "S_FB_U": // Save Feedback Understanding
            return { ...state, understanding: action.payload };
        case "S_FB_S": // Save Feedback Support
            return { ...state, support: action.payload };
        case "S_FB_C": // Save Feedback Comments
            return { ...state, comments: action.payload };
        case "S_FB_FL": // Save Feedback Flagged
            return { ...state, flagged: action.payload };
        case "C_FB": // Clear Feedback
            return initialState;
        default:
            return state;
    }
} //use for fb_component and review_fb_component

export default feedbackReducer;