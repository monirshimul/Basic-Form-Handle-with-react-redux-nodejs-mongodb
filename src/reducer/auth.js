const authReducer = (state = false, action) => {
    console.log("From Auth", action.type)
    switch (action.type) {
        case "SIGN_IN": {
            return !state
        }
        default: {
            return state
        }
    }
}


export default authReducer;

