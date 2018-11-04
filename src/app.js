import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Head } from './components/common';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Head />
        <MovieList />
      </View> 
    </Provider>
  );
};

export default App;
