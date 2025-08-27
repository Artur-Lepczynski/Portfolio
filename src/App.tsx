import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";
import ParticleBackground from "./components/UI/background/ParticleBackground";
import Curtain from "./components/UI/curtain/Curtain";

function App() {
  return (
    <>
      <Curtain />
      <ParticleBackground />
      <Intro />
      <Projects />
    </>
  );
}

export default App;
