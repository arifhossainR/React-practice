import React from 'react';
import Child from './Child';

function btnCick(){
    alert("Hello User!!!");
}

const Main = () => {
    return (
        <div>
            <Child myButton={btnCick} />
        </div>
    );
};

export default Main;