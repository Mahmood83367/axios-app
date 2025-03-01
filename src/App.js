import './App.css';
import Login from './pages/Login'
import { Route, Routes} from 'react-router-dom'
import Drawer from './components/Drawer'
import { AuthProvider } from "./contexts/AuthContext";



function App(props) {


  return  ( <AuthProvider>

  <Routes>
   <Route path="/" element={<Drawer/>}/>
   <Route path="/dashboard" element={<Drawer/>}/>
   <Route path="/categories" element={<Drawer   {...props}/>}/>
   <Route path="/product" element={<Drawer/>}/>
   <Route path="/cart" element={<Drawer/>}/>
   <Route path="/login" element={<Login/>}/>
  </Routes>

</AuthProvider>)
}

export default App;
