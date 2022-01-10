import ConinTracker from "./components/CoinTracker";
import ToDo from "./components/ToDo";
import Home from "./routes/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from "./routes/Detail";

function App() {
  return(
    <div>
      <ToDo/>
      <ConinTracker/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;