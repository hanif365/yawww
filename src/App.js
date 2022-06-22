import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import Header from './components/YawwComponent/Header/Header';
import NewCollections from './components/YawwComponent/NewCollections/NewCollections';
import RecentTrade from './components/YawwComponent/RecentTrade/RecentTrade';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Loans from './pages/Loans/Loans';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/loans" element={<Loans />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
