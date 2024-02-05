
import { Route, Routes } from 'react-router-dom';
import './App.css'
import LogIn from './Components/Auth/LogIn';
import SignUp from './Components/Auth/SignUp';
import ResponsiveDrawer from './Components/Drawer/Drawer';
import Personal_Collection from './Pages/Personal_Collection/Personal_Collection';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './utils/PublicRoute';
import PrivateRoutes from './utils/PrivateRoutes';


function App() {

  return (
    <div className="">
      <Toaster />
      <Routes>
        <Route path='/' element={<PublicRoute><LogIn /></PublicRoute>} />
        <Route path='/registration' element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashBoard" element={<ResponsiveDrawer />} >
            <Route
              path="/dashBoard/Personal_Collection"
              element={<Personal_Collection />}
            />
          </Route>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
