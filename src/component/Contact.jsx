import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/style/style.css"
const Contact = () => {
  let point = "https://api.github.com/users"
  const [data, setData] = useState([])

  const accounts = () => {
    axios.get(point).then((response) => {
      console.log(response.data)
      setData(response.data)
    }).catch((error) => {
      console.log(error);
    }).then(() => {

    })
  }
  useEffect(() => {
    accounts()
  }, [])

  return (
    <div className='flex'>
      {data.map((element, i) => (
        <div class="card">
          <div class="card-border-top">
            <h3>{element.id}</h3>
          </div>
          <div class="img">
            <img src={element.avatar_url} className="img" alt="" />
          </div>
          <span>{element.login}</span>
          <p class="job">Git Account </p>
        </div>
      ))}

    </div>
  )
}
export default Contact