import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/album.css'


function Images(props) {
  const [phts, setphts] = useState([])
  const [albumName, setAlbumName] = useState({})



  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/albums/${id}?_embed=photos`).then(resp =>{
        setAlbumName(resp.data)
        setphts(resp.data.photos)
    })
 }, [])

  return (
    <div className="box">
        <p>
          Albumsskadhkahsd
        </p>
        <div>
        {phts.map(e => (
            <Link key={"e" + e.id} to={"/pic/" + e.id}>
                <div>
                    <img className="thumb" src={e.img} alt=''/>
                </div>
            </Link>
            ))}

        </div>
    </div>
  )
}

export default Images

