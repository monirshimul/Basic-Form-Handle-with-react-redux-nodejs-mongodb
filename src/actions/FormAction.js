import axios from "axios";


// action initial
export const CALL_FORM = "CALL_FORM"

//action creator
export const formAction = async (data) => {

    let res = await axios.post("http://localhost:5000/add", data);
    console.log(res.data);
    return {
        type: CALL_FORM,
        payload: res.data
    }

}