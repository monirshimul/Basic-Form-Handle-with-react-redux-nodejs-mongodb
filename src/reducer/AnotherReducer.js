const AnotherReducer = (value = 0, action) => {
    console.log("From AnotherReducer", action.type)
    switch (action.type) {
        case "INCREMENT": {
            return value + action.payload
        }
        case "DECREMENT": {
            return value - action.payload
        }
        default: {
            return value
        }
    }
}


export default AnotherReducer;