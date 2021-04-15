import React from 'react';
// import Categories from './components/Categories';
// import axios from 'axios';
// import NewsList from './components/NewsList';
import NewsPage from './components/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
