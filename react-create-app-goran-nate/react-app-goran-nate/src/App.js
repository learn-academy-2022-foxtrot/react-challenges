import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Profile from "./components/Profile/profile";
import Favorites from "./components/Favorites/favorites";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Footer />
      <Favorites />
    </div>
  );
};

export default App;
