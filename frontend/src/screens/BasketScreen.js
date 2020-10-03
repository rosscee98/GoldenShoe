import React, { useEffect } from 'react';
import { addToBasket, removeFromBasket } from '../actions/basketActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BasketScreen(props) {
    const productId = props.match.params.id;
    const dispatch = useDispatch();

    const basket = useSelector(state => state.basket);
    const { basketItems } = basket;

    const handleRemoveFromBasket = (productId) => {
        dispatch(removeFromBasket(productId));
    };

    const handleCheckout = () => {
        props.history.push("/signin?redirect=shipping");
    };

    useEffect(() => {
        if (productId) {
            dispatch(addToBasket(productId, 2, 1));
        };
    }, []);

    //228,231,235
    return <Container className="content-container px-4 pt-0 pb-3" fluid>
        <div className="bg-light-grey px-3 py-2 mt-0 round-edge">
            <div className="basket">
                <div className="basket-list">
                    <ul className="basket-list-container">
                        <li>
                            <h3>Shopping Basket</h3>
                            <div>Price</div>
                        </li>
                        {
                            basketItems.length === 0
                                ? <p>Basket is empty.</p>
                                : basketItems.map(item => 
                                    <li>
                                        <div className="cart-image">
                                            <img src={ item.image } alt="product" />
                                        </div>
                                        <div className="product-name">
                                            <div>
                                                <Link to={ "/product/" + item.product }>{ item.name }</Link>
                                            </div>
                                            <div>
                                                <p className="text-muted">Size { item.size }</p>
                                            </div>
                                            <div>
                                                Qty: 
                                                <select value={ item.qty } onChange={ (e) => dispatch(addToBasket(item.product, item.size, e.target.value)) }>
                                                {[...Array(item.countInStock).keys()].map(x => 
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                )}
                                                </select>
                                                <button type="button" className="button" onClick={ () => handleRemoveFromBasket(item.product) }>Delete</button>
                                            </div>
                                        </div>
                                        <div>
                                            { item.price }
                                        </div>
                                    </li>    
                                )
                        }
                    </ul>
                </div>
                <div className="basket-action">
                    <h3>Subtotal ({ basketItems.reduce((acc, cur) => acc + parseInt(cur.qty), 0) } items):
                        £{ basketItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0).toFixed(2) }</h3>
                    <button onClick={ () => handleCheckout() } className="button primary w-100" disabled={ basketItems.length === 0 }>Proceed to checkout</button>
                </div>
            </div>
        </div>
    </Container>
}

export default BasketScreen;