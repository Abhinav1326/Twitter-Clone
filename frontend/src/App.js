import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ProtectedRoutes from './pages/ProtectedRoutes';
import PageLoading from './pages/PageLoading';
import Feed from './pages/Feed/Feed'
import Explore from './pages/Explore/Explore';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>}>
              <Route index element={<Feed />} />
            </Route>

            <Route path='/home' element={<ProtectedRoutes><Home /></ProtectedRoutes>} >
              <Route path='feed' element={<Feed />} />
              <Route path='explore' element={<Explore />} />
              <Route path='bookmarks' element={<Bookmarks />} />
              <Route path='profile' element={<Profile />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/page-loading' element={<PageLoading />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
