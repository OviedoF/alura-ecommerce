import { Provider } from 'react-redux';
import './App.css';
import MainPage from './components/mainPage';
import NavBar from './components/NavBar';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
