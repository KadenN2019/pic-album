import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/album.css'


function Images(props) {
  const [phts, setphts] = useState([])
  const [albumName, setAlbumName] = useState("")

  const [albs, setAlbs] = useState([])

  useEffect(() =>{
      axios.get("http://localhost:3000/albums/").then(resp => {
        setAlbs(resp.data)
      })
  }, [])

  useEffect(() => {
      console.log(props)
    const id = props.match.params.id
    axios.get(`/albums/${id}?_embed=photos`).then(resp =>{
        setAlbumName(resp.data.name)
        setphts(resp.data.photos)
    })
 }, [props.match.params.id])


  return (
    <div className="box">
        
        <div className="titles">
            {albs.map(alb =>(
                <Link key={"alb" + alb.id} to={"/albums/" + alb.id}>
                    <div>
                        <div className="text-title">{alb.name}</div>
                    </div>
                </Link>
            ))}
        </div>
        <div className="title">{albumName}</div>
      
        <div  className="pictures">
        {phts.map(e => (
            <Link key={"e" + e.id} to={"/pic/" + e.id}>
                <div className="pic">
                    <div className="title">{e.name}</div>
                    <img className="thumb" src={e.img} alt=''/>
                </div>
            </Link>
            ))}

        </div>
    </div>
  )
}

export default Images

