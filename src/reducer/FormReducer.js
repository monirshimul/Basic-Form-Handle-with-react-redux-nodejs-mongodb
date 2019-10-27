
const initialState = {
    name: "",
    organization: "",
    designation: ""
};

export default function (state = initialState, action) {
    console.log("Form action called");
    const { type, payload } = action;

    switch (type) {
        case "CALL_FORM":
            state.name = payload.name
            state.organization = payload.organization
            state.designation = payload.designation
            console.log(" from State :", state);
            return state;
        default:
            return state;

    }

}