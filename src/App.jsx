import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 const [hashtags, setHashtags] = useState([])

 useEffect(() => {
  axios.get('/api/v1/hashtags')
  .then((response) => {
    setHashtags(response.data)
  })
  .catch((error) => {
    console.log(error);
    
  })
 })


  return (
    <>
      <h1>Hashtag Generator</h1>
      <p>HASHTAGS: {hashtags.length}</p>
      {
        hashtags.map((hashtag, index) => (
          <div key={hashtag.id}>
            <p>{hashtag.id}</p>
            <h5>{hashtag.hashtags}</h5>
          </div>
        ))
      }
    </>
  )
}

export default App
