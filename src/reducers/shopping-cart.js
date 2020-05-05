const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    // yeni massivde yoxdu bele indexli element, yeni bosdu massiv
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

// quantity movzusu super meseledi, eyni funq-siya hem + hem - isini gorur
const updateCartItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + book.price * quantity,
    }
}

const updateOrder = (state, bookId, quantity) => {

    const { bookList: { books }, shoppingCart: { cartItems } } = state;

    // asagidaki kodla knopkasi basilar kitabi elde edirik
    let book = books.find((book) => bookId === book.id);

    // cartItemsin hansi elementi oldugunu tapir asagidaki kod
    let itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    let item = cartItems[itemIndex];

    let newItem = updateCartItem(book, item, quantity);
    //orderTotal = updateCartItem.orderTotal;
    // // asagida shoppingCart-in umumi veziyyetini hemde cartItems arrayinin
    // // evvelki veziyyetini qoruyub saxlayiriq ve oz elavemizi edirik
    console.log(updateCartItem(book, item, quantity));
    console.log(updateCartItems(cartItems, newItem, itemIndex));

    
    return {
        orderTotal: updateCartItems(cartItems, newItem, itemIndex).reduce((accum, item) => accum + item.total, 0),
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_DELETE_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_BOOK_DELETE_FROM_CART':
            // asagidaki funqsiya hansi item-de delete knopkasi basildigini tapir
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);

            // quantiti hissesine cartdaki itemin count sayini veririk menfi ile
            // ve 0 dusen kimi silinir
            return updateOrder(state, action.payload, -item.count);
        default:
            return state.shoppingCart;
    };
}

export default updateShoppingCart;