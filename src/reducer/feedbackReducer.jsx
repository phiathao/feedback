const feedbackReducer = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    flagged: ''
}, action) => {
    switch (action.type) {
        case "S_FB_F":
            return state.feeling = action.payload;
        case "S_FB_U":
            return state.understanding = action.payload;
        case "S_FB_S":
            return state.support = action.payload;
        case "S_FB_C":
            return state.comments = action.payload;
        case "S_FB_FL":
            return state.flagged = action.payload;
        default:
            return state;
    }
} //use for fb_component and review_fb_component

export default feedbackReducer;