import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemoveFromCart, allBookRemoveFromCart } from '../../actions/actions';

const ShoppingCartTable = ({ items, orderTotal, onIncrease, onDecreace, onDelete }) => {

    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx+1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={() => onIncrease(id)}>
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        className="btn btn-outline-warning btn-sm float-right"
                        onClick={() => onDecreace(id)}>
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    }
    return (
        <div className='shopping-cart-table'>
            <h2>Your Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </table>
            <div className="total">
                Total: ${orderTotal}
            </div>
        </div>
    );
};

// component artiq goturub bunlari istifade ede biler
const mapStateToProps = (state) => {
    return{
        items: state.shoppingCart.cartItems,
        orderTotal: state.shoppingCart.orderTotal
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(bookAddedToCart(id)),
        onDecreace: (id) => dispatch(bookRemoveFromCart(id)),
        onDelete: (id) => dispatch(allBookRemoveFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);