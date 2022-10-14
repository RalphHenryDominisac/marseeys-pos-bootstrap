import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomeOrderPage from "./pages/HomeOrderPage";
import PendingPage from "./pages/PendingPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomeOrderPage />} />
          {/* <Route path="/" element={<SignInPOS />} /> */}
            {/* <Route path="/homeorderpage" element={<HomeOrderPage />} /> */}
            <Route path="/pendingpage" element={<PendingPage />} />
             <Route path="/historypage" element={<HistoryPage />} />
            {/* <Route path="/finalizeorderpage" element={<FinalizeOrderPage />} /> */}
            {/* <Route path="/ordersummarypage" element={<OrderSummaryPage />} /> */}
            {/* <Route path="/printreceiptformatpage" element={<PrintReceiptFormatPage />} */}
        </Routes>


      </div>
    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/17628305/windows-git-warning-lf-will-be-replaced-by-crlf-is-that-warning-tail-backwar



