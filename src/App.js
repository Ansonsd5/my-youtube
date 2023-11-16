import logo from './logo.svg';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';

import './App.css';
import MainConatiner from './components/MainConatiner';
import WatchPage from './components/WatchPage';
import Hooks from './components/Hooks';

const appRouter = createBrowserRouter([{

  path: "/",
  element : <Body />,
  children : [{

    path : "/",
    element : <MainConatiner />
  },
  {
    path : "watch",
    element : <WatchPage />
  },
  {
    path : "Hooks",
    element : <Hooks />
  }
    
  ]
}]);

function App() {
  return (
  <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
      <Body />
      </Provider>
  );
}

export default App;
