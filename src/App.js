import { Routes,Route } from "react-router-dom";
import { Header,Login,Home,Register } from "./containers/Public";
import {path} from './ultils/constant'


function App() {
  return (
    <div className="">
        <Routes>
          <Route path={path.HOME} element={<Home/>}> 
              <Route path={path.LOGIN} element={<Login/>} />
              <Route path={path.REGISTER} element={<Register/>} />
          </Route>
          
        </Routes>
    </div>
  );
}

export default App;
