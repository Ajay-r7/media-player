import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../services/allAPI';


function Add() {
  const [uploadVideo,setUploadVideo]=useState({

    id:"",caption:"",url:"",link:""
  })

  console.log(uploadVideo);

  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd= async()=>{
    const{id,caption,url,link}=uploadVideo
    if(!id||!caption||!url||!link){
      alert("please fill the missing fields")
    }else{
      //store uploaded video to join server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status >=200 && result.status<300){
        //sucess
        handleClose()
        //empty field
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
      }else{
        alert(result.message)
      }
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex ms-5 align-item-center">
      <h5>Upload-Videos</h5>
      <button className="btn" onClick={handleShow}><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
    </div>

    {/* modal */}
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
         <Form>
         <FloatingLabel
        controlId="floatingInputID"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Name">
        <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
<br />
      <FloatingLabel
        controlId="floatingInputimage"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingVideo" label="Video URL">
        <Form.Control type="text" placeholder="VIdoe URL" onChange={getYoutubeEmbedLink}/>
      </FloatingLabel>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add