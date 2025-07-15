

const Input = () => {

    let number = 40

    return (
        <div>
            {
                (()=>{
                    if(number>=80 && number<=100){
                        return <h1>A+</h1>
                    }else if(number>=40 && number<80){
                        return <h1>Just Passed</h1>
                    }else{
                        return <h1>Invalid number inputed.</h1>
                    }
                })()
            }
        </div>
    );
};

export default Input;