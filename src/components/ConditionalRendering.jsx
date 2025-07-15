

const ConditionalRendering = () => {

    let status = false
    
    return (
        <div>
            <span>Login Status:</span>
            {
                (()=>{
                    if(status){
                        return <button>Logout</button>
                    }else{
                        return <button>Login</button>
                    }
                })()
            }
        </div>
    );
};

export default ConditionalRendering;