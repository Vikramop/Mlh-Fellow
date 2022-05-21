import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import BookDoc from "./pages/BookDoc";

function App() {
  return (
    
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/BookDoc" element={<BookDoc/>} />
    </Routes>
    

  );
}

export default App;
