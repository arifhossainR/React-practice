import React from 'react';

const Child = (props) => {
    return (
        <div>
            <button onClick={props.myButton}> Submit </button>
        </div>
    );
};

export default Child;