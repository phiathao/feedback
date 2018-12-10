const adminFeedbackReducer = (state = [], action) => {
    switch (action.type) {
        case "V_FB": // View FeedBack
            return [action.payload]
        case "G_FB": // Get Feedback --WIP
            return state;
        default:
            return state;
    }
} // use for admin component

export default adminFeedbackReducer;