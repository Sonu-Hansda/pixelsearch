import Home from "./Pages/Home"
import ReasultPage from "./Pages/ReasultPage"
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quesry" element={<ReasultPage />} />
      </Routes>
    </>
  )
}

export default App
