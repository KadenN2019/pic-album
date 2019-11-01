import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/album.css'


function Albums(props) {
  const [albs, setAlbs] = useState([])
  useEffect(() =>{
      axios.get("http://localhost:3000/albums/").then(resp => {
        setAlbs(resp.data)
      })
  }, [])

  return (
    <div className="box">
      <div>Albums</div>
        <div  className="pictures">
      {albs.map(alb =>(
        <div>
            <Link key={"alb" + alb.id} to={"/albums/" + alb.id}>
                <div>
                    <div className="title">{alb.name}</div>
                    <img className="thumb" src={alb.thumbnail}/>
                </div>
            </Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Albums
