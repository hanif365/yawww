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
import History from './pages/Loans/History/History';
import MyListing from './pages/Loans/MyListing/MyListing';
import MyFundedLoans from './pages/Loans/MyFundedLoans/MyFundedLoans';
import HelpFaq from './pages/Loans/HelpFaq/HelpFaq';
import Listings from './pages/Trades/Listings/Listings';
import TradeApp from './pages/TradeApp/TradeApp';
import Stake from './pages/Stake/Stake';
import ProvideLiquidity from './pages/Stake/ProvideLiquidity/ProvideLiquidity';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/loans" element={<Loans />} />
      <Route path="/loans/listing" element={<Loans />} />
      <Route path="/loans/history" element={<History />} />
      <Route path="/loans/my-listing" element={<MyListing />} />
      <Route path="/loans/funded-loan" element={<MyFundedLoans />} />
      <Route path="/loans/help-faq" element={<HelpFaq />} />

      <Route path="/trades" element={<Listings />} />
      <Route path="/trades/listing" element={<Listings />} />
      <Route path="/trades/history" element={<Listings />} />
      <Route path="/trades/my-listing" element={<Listings />} />
      <Route path="/trades/funded-loan" element={<Listings />} />
      <Route path="/trades/help-faq" element={<Listings />} />

      <Route path="/trade-app" element={<TradeApp />} />

      <Route path="/stake" element={<Stake />} />
      <Route path="/stake/staking" element={<Stake />} />
      <Route path="/stake/liquidity" element={<ProvideLiquidity />} />
      <Route path="/stake/farm" element={<Stake />} />

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
