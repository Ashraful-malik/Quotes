import React from "react";
import Image from "./img/image.svg";
import { NavLink } from "react-router-dom";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div id="textStyle">
                    <h3>Read Motivational Quotes</h3>
                  </div>
                  <NavLink to="/quotes" type="button " className="btn   ">
                    Read
                    <InsertDriveFileIcon />
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 img-animate ">
                  <img src={Image} alt={"img"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
