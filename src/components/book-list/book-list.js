import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
// props-lari bu comp-de istifade ede bilmeyimiz ucun lazimdi
import { connect } from 'react-redux';
import { booksLoaded, booksRequested, booksError, bookAddedToCart } from '../../actions/actions';
import withBookstoreService from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

// best practice-e gore logika ve view ayri olmalidi
const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">

            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={()=> onAddedToCart(book.id)}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

// best prak. deyirki components papkasinin altinda container adli
// papkada olsun redux componentler, sonra ederem
class BookListContainer extends Component {

    componentDidMount() {

        this.props.fetchBooks();

        // asagidaki didMountun ilk variantidi, burda DidMount cox isle mesguldu!
        // asag 2setrle service-den info goturduk
        // const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
        // booksRequested();
        // bookstoreService.getBooks()
        //     .then((data) => booksLoaded(data))
        //     .catch((err) => booksError(err))
    };

    // data ve actionu birlesdiririk ve actiondan cixan melumati render istifade edir
    // mapDispatchToProps bu komek edirki booksLoaded elde edirik props-la
    // service-de Promise qaytaran funq yazdigimiz ucun booksloaded-i yuxarida cagirdiq 
    //this.props.booksLoaded(data);


    render() {

        // destruct
        // bu olmasa asagida this.props.books yazmali idik
        const { books, loading, error, onAddedToCart } = this.props;

        //const spinner = loading ? <Spinner/> : null;

        // spinneri bu mentiqle gosteririk, loading deyerini store-dan aliram
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <BookList books={books}
                onAddedToCart={onAddedToCart} />
        )

    }
};

// reducer-den melumatlari alib verir bura,yuxarida istifade olunur
// state.books yazmaqla gotururuk melumatlari reducerden
// bu funq. bize hansi props-larin lazim oldugunu deyir
// basqa sozle reduxStore-dan hansi melumati cekmek istediyimizi deyirik
const mapStateToProps = (state) => {
    return {
        books: state.bookList.books,
        loading: state.bookList.loading,
        error: state.bookList.error
    }
}

// mapDisToPrps-un funqsiya variantidi, burda en maraqli meqam boostoreservice-e goturmekdi
// asagida hoc obertka hissesi ele qurulubki
// connect withBookstoreService()-daki melumatlari gore bilir
// withBookstoreService()-daki melumatlari ownProps-la gotururuk
// bu asagidaki funqsiyani actions-a kocurmek olar, eger diger comp-larda istifade edecekse
// nece kecirmek haqqinda 143 sayli video 
// mapDispatchToProps funqsiyasinin temasi BooksContainer componenti iledi,
// burda yazilani ishletmek ucun BooksContainer-de qebul etmek lazimdi
const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            bookstoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((err) => dispatch(booksError(err)))
        },
        // burdaki suqsiyalarin reduce-e gedib catmasini yoxlamaq ucun
        // reducer-de console.log edib, action type capa verirem
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

// mapStateToProps-la elde etdik state-i, sonra onunla hansi deyisikliyi olacagini
// bu funq teyin edir, hansi actionlari bu component istifade edeceyini
// bu asagidaki mapDisToPro funqsiyasinin object variantidi
// yuxarida mapDisToProps-un funqsiya variantini yaziram
// bu object formasi yuxarida DidMount-da comment etdiyin hisse ile ishleyirdi
// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// }

export default withBookstoreService()
    (connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
    );