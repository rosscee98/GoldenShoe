import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AppFooter(props) {
  return (
    <footer className="footer mt-auto">
      <Row className="justify-content-center">
        <ul>
          <li className="list-inline-item">
            <Link to="/">
              <i className="fa fa-twitter" />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">
              <i className="fa fa-facebook" />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">
              <i className="fa fa-instagram" />
            </Link>
          </li>
        </ul>
      </Row>
      All rights reserved.
    </footer>
  )
}

export default AppFooter
