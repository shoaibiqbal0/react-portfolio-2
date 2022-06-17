import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
