import React from 'react'
import { addToBasket, removeFromBasket } from '../actions/basketActions'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CounterInput from 'react-counter-input'

function BasketScreen(props) {
  const basket = useSelector((state) => state.basket)
  const { basketItems } = basket
  const dispatch = useDispatch()

  const handleRemoveFromBasket = (productId, size) => {
    dispatch(removeFromBasket(productId, size))
  }

  const handleCheckout = () => {
    props.history.push('/signin?redirect=shipping')
  }

  return (
    <Container className="content-container px-4 pt-0 pb-3" fluid>
      <div className="basket bg-light-grey px-3 py-2 mt-0 round-edge">
        <div className="basket-list">
          <ul className="basket-list-container">
            <li>
              <h3>Basket</h3>
            </li>
            {basketItems.length === 0 ? (
              <p>Basket is empty.</p>
            ) : (
              basketItems.map((item) => (
                <li>
                  <Row className="product-row px-3 w-100">
                    <Col xs={12} sm={6} md={3}>
                      <Image src={item.image} alt={item.name} />
                    </Col>
                    <Col xs={12} sm={6} md={3} className="bottom">
                      <Link to={'/product/' + item.product}>
                        <h3>{item.name}</h3>
                      </Link>
                      <p className="text-muted">Size {item.size}</p>
                      Qty:
                      <CounterInput
                        count={item.qty}
                        min={1}
                        max={Math.min(item.countInStock, 30)}
                        onCountChange={(count) =>
                          dispatch(
                            addToBasket(
                              item.product,
                              item.size,
                              item.countInStock,
                              count,
                            ),
                          )
                        }
                      />
                    </Col>
                    <Col xs={12} sm={6} md={3} className="bottom">
                      <Button
                        variant="danger"
                        onClick={() =>
                          handleRemoveFromBasket(item.product, item.size)
                        }
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="bottom">
                      <h3 className="text-muted">
                        £{(item.price * item.qty).toFixed(2)}
                      </h3>
                    </Col>
                  </Row>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="basket-action">
          <h3>
            Subtotal (
            {basketItems.reduce((acc, cur) => acc + parseInt(cur.qty), 0)}{' '}
            items): £
            {basketItems
              .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
              .toFixed(2)}
          </h3>
          <Button
            className="w-100 mt-2"
            onClick={() => handleCheckout()}
            disabled={basketItems.length === 0}
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default BasketScreen
