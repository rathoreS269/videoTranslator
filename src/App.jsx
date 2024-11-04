import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import UploadVideo from "./pages/UploadVideo"
import StreamVideo from "./pages/StreamVideo"

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/uploadvideo" element={<UploadVideo/>} />
    <Route path="/streamvideo" element={<StreamVideo/>} />
  </Routes>
  </BrowserRouter>
}

export default App