import React from 'react';
import {Home} from './views/Home';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TailwindProvider utilities={utilities}>
          <Home />
        </TailwindProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
