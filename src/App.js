import "./style.css";
import{
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Type from "./routes/Type";

function App() {
 return ( 
    <Router>
        <Routes>
            <Route path="/page/:genre" element={<Type />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />   
        </Routes>
    </Router>
  );
}

 
export default App;
