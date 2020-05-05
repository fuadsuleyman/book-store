import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

// hoc
// birinci argument componentdi, amma ikinci argument service-deki konkret methodlardi
const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props}
                                bookstoreService={bookstoreService} />
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
}

export default withBookstoreService;