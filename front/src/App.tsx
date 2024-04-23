import List from "./features/ships/List";
import Navbar from "./layout/NavBar";
import Hero from "./layout/Hero";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <List></List>
        <Footer/>
    </>
  )
}

export default App
