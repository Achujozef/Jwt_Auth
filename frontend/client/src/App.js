import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { checkAuth } from "features/user";
import DashboardPage from "./containers/DashboardPage";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import AdminLogin from "./containers/AdminLogin";
import AdminRegister from "./containers/AdminRegister";
import UserList from "containers/UserList";

const App=()=> {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkAuth())
  },[])
return(

  <Router>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/adminregister' element={<AdminRegister/>}/>
      <Route path='/userlist' element={<UserList/>}/>
    </Routes>
  </Router>

)
};

export default App;
