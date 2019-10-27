import React from 'react';
import { withRouter } from 'react-router-dom';

function Interaction(props) {

    function nextPage() {
        props.history.push('/other')
    }
    return (
        <div>
            <button onClick={nextPage}>Click</button>
        </div>
    )
}

export default withRouter(Interaction);
