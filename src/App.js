import logo from './logo.svg';

import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
   <Provider  store ={store}>
      <Header />
      <Body />
      </Provider>
  );
}

export default App;
