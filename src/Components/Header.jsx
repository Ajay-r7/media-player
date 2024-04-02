import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}>
            <img
              alt=""
              src="https://th.bing.com/th/id/R.64a553d007ad04efe7c5d6a48677c124?rik=oLTMSsgR%2fcpnAg&riu=http%3a%2f%2fveed.me%2fwp-content%2fuploads%2fvideocamp-logo-animation.gif&ehk=eFA8bQ9zbqDe9n77QRF5DXqRjPVjj0epdGJ90kHPk6c%3d&risl=&pid=ImgRaw&r=0https://www.pngrepo.com/download/74993/video-player.pnghttps://www.pngrepo.com/download/74993/video-player.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-pill"
            />{' '}
            Z-Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header