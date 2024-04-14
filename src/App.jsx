import Result from "./Pages/Result"
import Home from "./Pages/Home"
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Result/>} />
      </Routes>
      
    </main>
    </>
  )
}

export default App
