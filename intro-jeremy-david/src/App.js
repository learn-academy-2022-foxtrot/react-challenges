import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Favorites/>
      <Footer/>
      
    </div>
  );
}

export default App;
