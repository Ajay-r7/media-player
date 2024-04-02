import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getallUploadedVideos, getcategory, updatecategoryAPI } from '../../services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
// create state for storing videos contents
const [allVideos,setAllVideos]=useState([])

useEffect(()=>{
  getAllUploadedVideo()
},[uploadVideoResponse,deleteVideoResponse])

const getAllUploadedVideo = async ()=>{
  const result = await getallUploadedVideos()
  // getAllVideosAPI() api to get all videos

  if(result.status===200){
    console.log(result);
    setAllVideos(result.data);
  }
  else{
    console.log("API failed");
    setAllVideos([])
  }
}

const dragOver=(e)=>{
  e.preventDefault()
}
const videoDropped = async(e)=>{
  const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  console.log(videoId,categoryId);
  const {data}= await getcategory()
  const selectedCategory = data.find(item=>item.id==categoryId)
  let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
  console.log(result);
  let {id,categoryName}=selectedCategory
  let newCategory={id,categoryName,allVideos:result}
  console.log(newCategory);
  const res = await updatecategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)
}
  return (
    // //now the data is in the form of an array so we have to map them and display them in columns present in this file itself on basis of the state(allVideos)
    <>
    <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>

    {
      allVideos?.length>0?allVideos.map(video=>(
     <Col sm={12} md={6} lg={4} xl={3}>
     <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
     </Col> 
  ) 
      ):<p>Nothing to display</p>
    }
    </Row>
    </>
  )
}

export default View
