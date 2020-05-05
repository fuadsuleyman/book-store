import React from 'react';
import BookList from '../book-list';
import Scroll from '../scroll';

const HomePage = () => {

    return (
        <div>
            <Scroll>
                <BookList />
            </Scroll>
        </div>
    )
}

export default HomePage;