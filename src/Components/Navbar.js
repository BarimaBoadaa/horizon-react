import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <img src="/images/horizon.png" alt="company logo" />
        </div>
        <div className="col-md-6 text-center flags">
          <img
            src="/images/Kenya-flag-icon-on-transparent-background-PNG.png"
            alt=""
            height="20px"
            width="40px"
          />
          <img src="/images/ghanaflag.png" alt="" height="20px" width="40px" />
          <img
            src="/images/nigeriaflag.png"
            alt=""
            height="20px"
            width="40px"
          />
        </div>
        <div className="col-md-3 text-right ">
          <h4 className="about">About Us</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
