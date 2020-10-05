import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function FavouritesScreen(props) {
    const favourites = useSelector(state => state.favourites);
    const { favouriteItems } = favourites;

    return <Container className="content-container px-4 pt-0 pb-3" fluid>
        <div className="bg-light-grey px-3 py-2 mt-0 round-edge">
            <h3>FavouritesScreen</h3>
            {
                favouriteItems.map(fav => (
                    <p>{ fav.name }</p>
                ))
            }
        </div>
    </Container>
}

export default FavouritesScreen;