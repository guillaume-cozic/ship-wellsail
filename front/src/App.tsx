import "./App.css"
import List from "./features/ships/List";
import Navbar from "./layout/NavBar";
import Hero from "./layout/Hero";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <List></List>
        <Footer/>
    </div>
  )
}

export default App
