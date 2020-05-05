import React from 'react';
import './shop-header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const ShopHeader = ({ numItems, orderTotal }) => {
    return (
        <header className="shop-header row">

            <Link to='/'>
                <div className="logo text-dark">ReStore</div>
            </Link>

            <Link to='/card'>
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${orderTotal})
              </div>
            </Link>

        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        orderTotal: state.shoppingCart.orderTotal,
        numItems: state.shoppingCart.cartItems.reduce((accum, item) => accum + item.count, 0)
    }
}

export default connect(mapStateToProps)(ShopHeader);