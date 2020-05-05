import React from 'react';

// service-in butun componentlerde elcatan olmasi ucun context-den istifade edirik
// Provideri App.js de import edib istifade edirik
// Comsumer-i ise ... faylinda

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
    BookstoreServiceProvider,
    BookstoreServiceConsumer
};
