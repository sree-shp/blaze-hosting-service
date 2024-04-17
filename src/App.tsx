import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Form />
      <Footer />
    </>
  );
}

export default App;
