const feedbackReducer = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    flagged: ''
}, action) => {
    switch (action.type) {
        case "S_FB":
            return [...state, action.payload]
        default:
            return state;
    }
} //use for fb_component and review_fb_component

export default feedbackReducer;