


const counterReducer = (state = 0, action) => {
    console.log("From Counter", action.type)
    switch (action.type) {
        case "INCREMENT": {
            return state + action.payload
        }
        case "DECREMENT": {
            return state - action.payload
        }
        default: {
            return state
        }
    }
}


export default counterReducer;