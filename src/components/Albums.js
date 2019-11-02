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
      <div className="text">Albums</div>
        <div  className="pictures">
      {albs.map(alb =>(
            <Link key={"alb" + alb.id} to={"/albums/" + alb.id}>
                <div className="pic">
                    <div className="title1">{alb.name}</div>
                    <img className="thumb" src={alb.thumbnail}/>
                </div>
            </Link>
      ))}
      </div>
    </div>
  )
}

export default Albums
