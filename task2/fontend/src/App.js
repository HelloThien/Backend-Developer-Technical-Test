import { BrowserRouter as Router,Routes, Route  } from "react-router-dom";

import TableUser from "./components/tableuser/TableUser";
 
 
import MyTree from "./components/tree/Tree";
function App() {
  return (
    <Router>
      <div className="App">
       
       <Routes>
       <Route path='/' element={<TableUser />} />
       <Route path='/family' element={<MyTree/>} />
       
       </Routes>
       
      </div>
    </Router>
  );
}

export default App;
