import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import BookDoc from "./pages/BookDoc";
import Store from "./pages/Store";

function App() {
  return (
    <>
    <Navbar/> 
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/BookDoc" element={<BookDoc/>} />
     <Route path="/Store" element={<Store/>} />
    </Routes>
    </>
  );
}

export default App;
