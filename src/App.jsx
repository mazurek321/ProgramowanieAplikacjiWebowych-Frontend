import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage"
import Users from "./Components/Users/Users"
import Cart from "./Components/Cart/Cart"
import Authorization from "./Components/Login_Register/Authorization"
import Login from "./Components/Login_Register/Login"
import Register from "./Components/Login_Register/Register"
import Announcements from "./Components/Announcements/Announcements"
import Logout from "./Components/Login_Register/Logout"
import { UserProvider } from "./Components/UserContext/UserContext"

function App() {

  return (
    <UserProvider>
     <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>} ></Route>
        <Route path="/announcements" element={<Announcements/>} ></Route>
        <Route path="/users" element={<Users/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        <Route path="/authorization" element={<Authorization/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
        <Route path="/logout" element={<Logout/>} ></Route>
      </Routes>
     </BrowserRouter>
    </UserProvider>
  )
}

export default App
