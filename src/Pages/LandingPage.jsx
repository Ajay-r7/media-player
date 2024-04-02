import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
    const navigateByURL = useNavigate()
  return (
    <>
       <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
            <h1 style={{fontSize:'40px'}}>Welcome to <span style={{color:'blueviolet'}}>Z-Player</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, beatae eveniet ipsa aliquam animi voluptate maiores quasi consectetur vitae obcaecati rem molestiae facere repellendus? Non reiciendis debitis soluta aut reprehenderit.</p>
            <button className='btn btn-info mt-4' onClick={()=>navigateByURL('./home')}>Get started</button>
        </Col>
        <Col lg={5}>
            <img style={{width:'400px'}} src="https://cdn.dribbble.com/users/285475/screenshots/4720919/channel_surfing.gif" alt="" />
        </Col>
        <Col></Col>
       </Row>
       <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards me-5 mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
                  <Card style={{ width: '22rem', }} className='p-4 bg-info'>
                      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                      <Card.Body>
                          <Card.Title className='text-primary'>Managing Videos</Card.Title>
                          <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ width: '22rem' }} className='p-4 bg-info'>
                      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                      <Card.Body>
                          <Card.Title className='text-primary'>Managing Videos</Card.Title>
                          <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card style={{ width: '22rem' }} className='p-4 bg-info'>
                      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                      <Card.Body>
                          <Card.Title className='text-primary'>Managing Videos</Card.Title>
                          <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                          </Card.Text>
                      </Card.Body>
                  </Card>
            
        </div>
       </div>

       <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
            <div className="col-lg-5">
                <h4 style={{color:'darkviolet'}}>Simple,Powerfull & Fast</h4>
                <h6 className="mb-5 mt-3"><span className="fw-bolder" style={{color:'blueviolet'}}>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde corrupti reiciendis sunt! Tenetur sunt a dolore vero, laborum laboriosam repellendus sint nam consectetur assumenda repellat excepturi saepe corrupti praesentium.</h6>
                <h6 className="mb-5 mt-3"><span className=" fw-bolder" style={{color:'blueviolet'}}>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde corrupti reiciendis sunt! Tenetur sunt a dolore vero, laborum laboriosam repellendus sint nam consectetur assumenda repellat excepturi saepe corrupti praesentium.</h6>
                <h6 className="mb-5 mt-3"><span className="fw-bolder" style={{color:'blueviolet'}}>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde corrupti reiciendis sunt! Tenetur sunt a dolore vero, laborum laboriosam repellendus sint nam consectetur assumenda repellat excepturi saepe corrupti praesentium.</h6>
            </div>
            <div className="video col-lg-5">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/daC3h0ZgPGA?si=M4GgkqqXCFmEitsJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe></div>
       </div>
    </>
  )
}

export default LandingPage