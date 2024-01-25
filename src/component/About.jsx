import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Fetch = () => {
    let endPoint = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get(endPoint).then((response) => {
            console.log(response.data)
            setData(response.data)
        })
            .catch((error) => {
                console.log(error)
            })
            .then(() => {

            })
    }
   

    return (
        <div>
            <button onClick={fetchData}>
                Fetch
            </button>

            {data.map((element, i) => (
                <div key={i}>
                    <h3>{element.id}</h3>
                    <h3>{element.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Fetch