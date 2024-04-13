import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  return (
    <>
      <Nav />
      <Body />
      <Footer />
    </>
  );
}

export default App;
