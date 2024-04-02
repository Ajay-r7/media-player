import React, { useEffect, useState } from 'react'
import { Button, Card, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addcategoryAPI, deletecategory, getaVideoAPI, getcategory, updatecategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';




function Category({dropVideoResponse}) {

  const [allCategory,setAllCategory]=useState([])
  const [categoryName,setCategoryName]= useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async() => {
    if(categoryName){
    const result = await addcategoryAPI({categoryName,allvideos:[]})
    if(result.status>=200 && result.status<300){
      handleClose()
      setCategoryName("")
      getcategories()
    }else{
      alert(result.message)
    }
  }else{
    alert("Please fill the field")
  }
  }

  useEffect(()=>{
    getcategories()
  },[dropVideoResponse])

  const getcategories = async()=>{
    const {data}= await getcategory()
    setAllCategory(data)
  }
  const removeCategory= async(id)=>{
    await deletecategory(id)
    getcategories()
  }
  const dragOver=(e)=>{
    console.log("video card dragged over the category");
    e.preventDefault()
  }

  const videoDrop = async(e,categoryId)=>{
    const videoId =e.dataTransfer.getData("VideoId")
    console.log("Video Id"+videoId,"dropped inside category:"+categoryId);
    const {data}= await getaVideoAPI(videoId)
    console.log(data);
    const selectedCategory = allCategory.find(item=>item.id===categoryId)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);
    await updatecategoryAPI(categoryId,selectedCategory)
    getcategories()

  }

  const videoDragStarted=(e,videoId,categoryId)=>{
    let datashare={videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(datashare))
  }

  return (
    <>
    <div className='d-grid'>
      <button className="btn btn-info" onClick={handleShow}>Add Category</button>
    </div>
    { allCategory?.length>0?allCategory.map(Category=>(

    <div className="border rounded p-3 mt-2" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,Category?.id)}>
      <div className="d-flex justify-content-between align-items-center">
        <h6>{Category?.categoryName}</h6>
        <button onClick={()=>removeCategory(Category?.id)} className="btn"><i class="fa-regular fa-trash-can"></i></button>
      </div>
      <Row>
        {
          Category?.allvideos?.length>0?Category?.allvideos.map(card=>(
            <Col sm={4} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,Category.id)}>
              <VideoCard video={card} insideCategory={true}/>

          </Col>
          )):null
          
        }
      </Row>
    </div>
    )): <p className="text-danger fw-bolder">no categories yet!</p>

    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel
        controlId="floatingname"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
      </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}

export default Category