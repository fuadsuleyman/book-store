import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import { CardPage, HomePage } from '../pages';
import ShopHeader from '../shop-header/shop-header';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={145} />
      <Switch>
          <Route path='/book-store' exact component={HomePage} />
          <Route path='/book-store/card' component={CardPage} />
      </Switch>
    </main>
  );
}

export default App;