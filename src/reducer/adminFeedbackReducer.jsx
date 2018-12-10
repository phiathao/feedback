const adminFeedbackReducer = (state = [], action) => {
    switch (action.type) {
        case "V_FB":
            return [action.payload]
        case "G_FB":
            return state;
        default:
            return state;
    }
} // use for admin_view_fb_component

export default adminFeedbackReducer;