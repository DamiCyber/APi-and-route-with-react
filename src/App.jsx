import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import About from "./component/About"
import Contact from "./component/Contact"
import Service from "./component/Service"
import Home from "./component/Home"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  )
}

export default App
