import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { AuthContextProvider } from './components/context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
