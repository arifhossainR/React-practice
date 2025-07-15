
import ObjectReceive from './ObjectReceive';

const myObject = {
    name: "Arif Hossain",
    age: 25,
    ID: "19CSE012",
    Department: "CSE"
}

const DataPass = () => {
    return (
        <div>
            <ObjectReceive objectPass={myObject} />
        </div>
    );
};

export default DataPass;