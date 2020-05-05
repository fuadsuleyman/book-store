import React from 'react';
import ShoppingCartTable from '../shopping-cart-table';

const CardPage = (props) => {
    return (
        <div>
            <ShoppingCartTable />
        </div>
    )
}

export default CardPage;


// funq component-de bele istifade edirik store melumatini, yuxarida connect-i import edirik
// const CardPage = ({books}) => {
//     return(
//         <div>
//             <ul>
//                 {
//                     books.map((book) => {
//                         return (
//                             <li key={book.id}>
//                                 {book.title}
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         books: state.books
//     }
// }

// export default connect(mapStateToProps)(CardPage);