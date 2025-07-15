

const ObjectReceive = (props) => {
    return (
        <div>
            <h1>
                <ul>
                    <li> {props.objectPass["name"]}</li>
                    <li> {props.objectPass["age"]}</li>
                    <li> {props.objectPass["ID"]}</li>
                    <li> {props.objectPass["Department"]}</li>
                </ul>
            </h1>
        </div>
    );
};

export default ObjectReceive;