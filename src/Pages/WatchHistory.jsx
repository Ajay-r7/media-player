import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deletehistory, gethistory } from '../../services/allAPI'
gethistory



function WatchHistory() {

  const [history, setHistory]=useState([])
  
  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async ()=>{
    const result = await getHistoryAPI()
    if(result.status===200){
      setHistory(result.data)
    }else{
      alert("api failed")
      console.log(result.message);
    }
  }

  const removeVideoHistory = async (id) => {
    await deletehistory(id)
    getHistory()
  }

  return (
    <>
    <div className="container mt-5 mb-5 justify-content-between">
      <h2>Watch-History</h2>
      <Link style={{textDecoration:'none',color:'blueviolet',fontSize:'25px'}}>
        Back to Home<i class="fa-solid fa-arrow-rotate-left"></i>
      </Link>
      <table className="table mb-5 container shadow w-100">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length>0?history.map((video,index)=>(
              <tr>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a href="">https://www.youtube.com/embed/zSWdZVtXT7E</a></td>
            <td>03/18/2024,09:21:45 AM</td>
            <td><Button onClick={()=>removeVideoHistory(video?.id)} className='btn'><i class="fa-regular fa-trash-can"></i></Button></td>
          </tr>
            )): <p>nothing to display</p>
          }
        </tbody>
      </table>
    </div>

    </>
  )
}

export default WatchHistory