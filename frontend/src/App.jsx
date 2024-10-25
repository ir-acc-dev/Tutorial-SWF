import './App.css'
import Header from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import List from "./components/List.jsx";
import ModifyDetails from "./components/ModifyDetails.jsx";

function App() {

  return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/tasks' element={<List />}></Route>
                <Route path='/add-task' element={<ModifyDetails />}></Route>
                <Route path='/edit-task/:id' element={<ModifyDetails/>}></Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
