import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavourites } from '../actions/favouriteActions'

function FavouritesScreen(props) {
  const favourites = useSelector((state) => state.favourites)
  const { favouriteItems } = favourites
  const dispatch = useDispatch()

  const handleRemoveFromFavourites = (productId) => {
    dispatch(removeFromFavourites(productId))
  }

  return (
    <Container className="content-container px-4 pt-0 pb-3" fluid>
      <div className="basket bg-light-grey px-3 py-2 mt-0 round-edge">
        <div className="basket-list">
          <ul className="basket-list-container">
            <li>
              <h3>Your favourites</h3>
            </li>
            {favouriteItems.length === 0 ? (
              <p>There's nothing here.</p>
            ) : (
              favouriteItems.map((item) => (
                <li>
                  <Row className="product-row px-3 w-100">
                    <Col xs={12} sm={6} md={3}>
                      <Image src={`${item.image}img1.jpg`} alt={item.name} />
                    </Col>
                    <Col xs={12} sm={6} md={3} className="bottom">
                      <Link to={`/product/${item.product}`}>
                        <h3>{item.name}</h3>
                      </Link>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="bottom">
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveFromFavourites(item.product)}
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="bottom">
                      <h3 className="text-muted">£{item.price}</h3>
                    </Col>
                  </Row>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default FavouritesScreen
