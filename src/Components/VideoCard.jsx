import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { deletevideo } from '../../services/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeVideo=async(id)=>{
    await deletevideo(id)
    setDeleteVideoResponse(true)
  }
  const dragStarted=(e,id)=>{
    console.log("Drag Started....video id:"+id);
    e.dataTransfer.setData("VideoId",id)
  }
  return (
    <>
    <Card draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" onClick={handleShow} src={video?.url}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-item-center'>
          <h5>{video?.caption}</h5>
          {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn d-flex'><i class="fa-regular fa-trash-can"></i></button>
      }
        </Card.Title>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${video?.link}?autoplay=1`} title="Interstellar - Trailer - Official Warner Bros. UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard