import './App.css';
import BottomNavigation from "./components/bottomNavigation/bottomNavigation"
import Home from "./components/body/home/home"
import Header from "./components/header/header"

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="cards">
        <Home />
      </section>
      <footer>
        <BottomNavigation />
      </footer>
    </div>
  );
}

export default App;
