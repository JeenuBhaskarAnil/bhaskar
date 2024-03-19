import { Fragment } from "react";
import mainheaderImage from "../../assests/headerBanner.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import AdminPage from "../Admin/AdminPage"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";

const handleAdminButton = (e) => {
  e.preventDefault();
  let check = window.confirm('Admin Page is only for Restaurent Staff');
  if (check) {
    window.location.href = "ap"
  }
}

const WelcomePage = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Dine In..</h1>
        <button>ADMIN</button>
        <button>ADMIN</button>

      </header>
      <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!" />

      </div>
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/AdminPage" element={<AdminPage />} />
        </Routes>
      </BrowserRouter> */}
    </Fragment>

  );
};

export default WelcomePage;
