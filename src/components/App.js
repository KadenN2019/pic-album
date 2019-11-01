import React from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Albums from './Albums'
import Images from './Images'
import '../styles/base.css'

function App(props) {
  return (
  <Router>
    <div id="container">
      <Route exact path="/" component={Albums}/>
      <Route path="/albums/:id" component={Images}/>
    </div>
  </Router>
  )
}

export default App
