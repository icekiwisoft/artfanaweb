import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import SideBar from './components/sidebar/sidebar';
import Home from './pages/home/home';

function MainLayout()
{
  return(
  <main>
    <SideBar/>
    <div className='content'>
    <Outlet/>

    </div>
  </main>
  )
}
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route Component={MainLayout} path="/">
<Route index Component={Home}/>

  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
