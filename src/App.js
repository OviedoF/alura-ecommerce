import { Provider } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import store from './store/index';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactSection from './components/ContactSection';
import LoginPage from './components/LoginPage';
import CategoryPage from './components/CategoryPage';
import ViewProductPage from './components/viewProductPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Router>
          <NavBar />

          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/products/:category' element={<CategoryPage />}></Route>
            <Route path='/products/:category/:id' element={<ViewProductPage />}></Route>
            <Route path='/*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>

          <ContactSection />
          <Footer />
        </Router>

      </div>
    </Provider>
  );
}

export default App;
