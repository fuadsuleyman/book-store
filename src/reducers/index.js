import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';


// setState-le state-i deyishmeyin reducer-le deyismekde esas ferq budurki,
// reucer-de misalcun ...state hissesini yazmasaydiq, hemin hisse itecekdi
// ya da ... operatordan istifade etmeden yeniden yazmaq lazimdi obj. elementlerini
const reducer = (state, action) => {

    // check etmek ucun
    console.log(action.type);
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }

}

export default reducer;

