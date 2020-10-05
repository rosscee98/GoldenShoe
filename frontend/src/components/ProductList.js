import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList(props) {
    return <div>
        <p className="text-muted mb-0">{ props.products.length } products found</p>
        <ul className="products">
            {
                props.products.map(product => {
                    return <li key={product._id}>
                        <Card className="product">
                            <Link to={ "/product/" + product._id }>
                                <Card.Img variant="top" src={ product.image } />
                            </Link>
                            <Card.Body>
                                <Link to={ "/product/" + product._id }>
                                    <Card.Title>{ product.name }</Card.Title>
                                    <Card.Subtitle className="text-muted">£{ product.price }</Card.Subtitle>
                                </Link>
                            </Card.Body>
                        </Card>
                    </li>
                })
            }
        </ul>
    </div>
}

export default ProductList;