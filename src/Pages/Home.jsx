import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {
  const[dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <>
      <div className="cointainer mt-5 mb-5 d-flex justify-content-between ">
        <div className="add-videos">
          <Add/>
        </div>
        <Link to={'/watchhistory'} style={{textDecoration:'none',color:'blueviolet',fontsize:'30px'}} >
        Watch-History
        </Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h2>All-Videos</h2>
          <View setDropVideoResponse={setDropVideoResponse}/>
        </div>
        <div className="category col-lg-3">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home