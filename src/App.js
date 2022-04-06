import { Provider } from 'react-redux';
import './App.css';
import ArticlesMainSection from './components/ArticlesMainSection';
import CategorysGrid from './components/CategorysGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MainPage from './components/mainPage';
import NavBar from './components/NavBar';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <MainPage />
        <CategorysGrid />
        <ArticlesMainSection />
        <ContactSection />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
