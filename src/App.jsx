import ConditionalRendering from "./components/ConditionalRendering";
import ContactForm from "./components/ContactForm";
import DataPass from "./components/DataPass";
import Footer from "./components/Footer";
import Main from "./components/functionPassToChildComponent/Main";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InputOfIF from "./components/InputOfIF"
import MapForLoop from "./components/MapForLoop";
import Demo from "./components/Demo";

const App = () => {
  return (
    <div>
      <h1>I am learning react</h1>
      <Demo/>
      <button>My button</button>
      <Header/>
      <Hero/>
      <InputOfIF/>
      <ContactForm/>
      <MapForLoop/>
      <ConditionalRendering/>
      <Footer/>
      <Main/>

      <DataPass title="Data will pass in the components" mytime={new Date().toTimeString()} />
    </div>
  );
};

export default App;
