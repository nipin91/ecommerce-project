import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import AppRoute from './app.route';
import Header from './shared/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <AppRoute />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
