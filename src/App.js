import "./styles.css";
import Photo from "./components/Photo.js"
import Info from "./components/Info.js"
import Buttons from "./components/Buttons.js"
import About from "./components/About.js"
import Footer from "./components/Footer.js"

export default function App() {
  return (
    <div>
      <Photo/>
      <Info/>
      <Buttons/>
      <About/>
    </div>
  )
}
