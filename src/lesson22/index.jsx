import React from 'react';
import {
    Route, 
    BrowserRouter as Router, 
    Routes, 
    Navigate,
    useNavigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { base } from './utils/index';

const index = () => {
    const token = JSON.parse(localStorage.getItem('token'))
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to="home" />} />
          {base.map(({ id, path, isPrivate, element }) =>
           !isPrivate && <Route key={id} path={path} element={element} />
          )}
          {base.map(({ id, path, isPrivate, element }) =>
           isPrivate && <Route key={id} path={path} element={token ? element : <Navigate to={'/login'}/>} />
          )}
        </Route>
        <Route exact path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Router>
  );
}

export default index;