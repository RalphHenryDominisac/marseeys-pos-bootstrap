import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import {
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";



export default function SideNavBar() {
    const navigate = useNavigate();

    const navigateToHomeOrderPage = () => {
      navigate("/");
    };
   

     const navigateToPendingPage = () => {
       navigate("/pendingpage");
     };

     const navigateToHistoryPage = () => {
       navigate("/historypage");
     };

      //  const navigateToHomeOrderPage = () => {
      //    navigate("/homeorderpage");
      //  };

        // const navigateToSignInPage = () => {
        //   navigate("/");
        // };

  return (
    <div className="col-auto px-0">
      <img
        className="marseeysUpperLeftIcon"
        src="../images/marseeys-ico.png"
        alt="Side Icon"
      />
      <div id="sidebar" className="collapse collapse-horizontal show border-end">
        <div
          id="sidebar-nav"
          className="list-group border-0 rounded-0 text-sm-start min-vh-100"
        >
          <a
            href="#"
            className="list-group-item border-end-0 d-inline-block text-truncate"
            data-bs-parent="#sidebar"
          >
            <button
              onClick={navigateToHomeOrderPage}
              type="button"
              className="btn btn-warning"
            >
              Order
            </button>
          </a>
          <a
            href="#"
            className="list-group-item border-end-0 d-inline-block text-truncate"
            data-bs-parent="#sidebar"
          >
            <button
              onClick={navigateToPendingPage}
              type="button"
              className="btn btn-warning"
            >
              Pending
            </button>
          </a>
          <a
            href="#"
            className="list-group-item border-end-0 d-inline-block text-truncate"
            data-bs-parent="#sidebar"
          >
            <button
              onClick={navigateToHistoryPage}
              type="button"
              className="btn btn-warning"
            >
              History
            </button>
          </a>

          <a
            href="#"
            className="list-group-item border-end-0 d-inline-block text-truncate"
            data-bs-parent="#sidebar"
          >
            <button type="button" className="btn btn-warning">
              Logout
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
