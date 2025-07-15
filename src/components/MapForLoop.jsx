

const MapForLoop = () => {
    let city = ["Select an option", "Dhaka", "Rajshahi", "Rangpur", "Sylhet", "Khulna", "Dinajpur", "Mymensing"]
    return (
        <div>
            <select>
                {
                    city.map((item, i)=>{
                        return <option key={i}>{item}</option>
                    })
                }
            </select>
        </div>
    );
};

export default MapForLoop;