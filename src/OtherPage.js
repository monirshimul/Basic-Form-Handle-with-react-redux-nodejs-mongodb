import React from 'react'
import { useSelector } from "react-redux";

function OtherPage() {


    const val = useSelector(state => state.counter);
    return (
        <div className="container">
            <h1>
                Value of Counter {val}
            </h1>
        </div>
    )
}


export default OtherPage;
