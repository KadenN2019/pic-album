import React, {useState, useEffect} from "react"
import axios from 'axios'
import '../styles/album.css'


function Pic(props) {
  const [pic, setPic] = useState('')
//   const [picName, setPicName] = useState("")



  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/photos/${id}`).then(img =>{
        setPic(img.data)
    })
 }, [])
 function goBack(){
    props.history.goBack()
 }
  return (
    <div>
        <button onClick={goBack}>&larr;</button>

        <div className="box">
            <div  className="pictures">
                <div className="pic">
                    <img className="picture" key={"img"+ pic.id} src={pic.img} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pic

