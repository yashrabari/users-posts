import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import UsersPage from './Pages/UsersPage';
import PostsPage from './Pages/PostsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/posts' Component={PostsPage} />
          <Route path='/' Component={UsersPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
