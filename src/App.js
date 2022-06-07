import "./App.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <header className="header">
      <Navbar />
      <Header />
    </header>
  );
}

export default App;
