import { Outlet } from 'react-router-dom';
import './App.css';
import { Header, Footer,BottomBar } from './components';

function App() {
  return (
    <>
      <Header />
      <BottomBar/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
