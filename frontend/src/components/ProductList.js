import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductList(props) {
  const mostRecentSorter = (a, b) => (a._id < b._id ? 1 : -1)
  const lowToHighPriceSorter = (a, b) => (a.price > b.price ? 1 : -1)
  const highToLowPriceSorter = (a, b) => (a.price < b.price ? 1 : -1)
  const atozSorter = (a, b) => (a.name > b.name ? 1 : -1)
  const ztoaSorter = (a, b) => (a.name < b.name ? 1 : -1)
  const sorters = [
    mostRecentSorter,
    lowToHighPriceSorter,
    highToLowPriceSorter,
    atozSorter,
    ztoaSorter,
  ]
  const [sort, setSort] = useState(0)

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <p className="text-muted mb-0 mr-auto">
          {props.products.length} products found
        </p>
        <Form inline>
          <Form.Label className="text-muted mr-1">Sort by:</Form.Label>
          <Form.Control as="select" onChange={(e) => setSort(e.target.value)}>
            <option key={0} value={0}>
              Most recent
            </option>
            <option key={1} value={1}>
              Price: low to high
            </option>
            <option key={2} value={2}>
              Price: high to low
            </option>
            <option key={3} value={3}>
              A-Z
            </option>
            <option key={4} value={4}>
              Z-A
            </option>
          </Form.Control>
        </Form>
      </div>
      <ul className="products">
        {props.products.sort(sorters[sort]).map((product) => (
          <li key={product._id}>
            {product.sizesAvailable.length === 0 && (
              <h4 id="soldOutTag" className="rounded d-flex">
                Sold out
              </h4>
            )}
            <Card className="product">
              {' '}
              {/* style={product.sizesAvailable.length === 0 ? {'transform': 'translateY(-20px)'} : null} */}
              <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={`${product.image}img1.jpg`} />
              </Link>
              <Card.Body>
                <Link to={`/product/${product._id}`}>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    £{product.price}
                  </Card.Subtitle>
                </Link>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
