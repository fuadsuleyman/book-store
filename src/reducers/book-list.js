
const updateBookList = (state, action) => {

    if (state === undefined) {
        return {
            books: [],
            loading: true,
            error: null
        }
    }
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                // birbasa state ile islemediyimiz ucun asagdakina ehtiyac yodu
                //...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_REQUEST':
            return {
                // birbasa state ile islemediyimiz ucun asagdakina ehtiyac yodu
                // ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                // birbasa state ile islemediyimiz ucun asagdakina ehtiyac yodu
                // ...state,
                books: [],
                loading: false,
                error: true
            }
        default:
            return state.bookList;
    };
}

export default updateBookList;