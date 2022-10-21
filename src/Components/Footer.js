import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-md-4 location">
            <h4>VISIT US IN KENYA</h4>
            <p className="sub-heading">Nairobi, Kenya</p>
            <p>
              Belgravia Centre, 14 Riverside drive, 4th floor, Off Riverside
              Drive Hanover Centre, 14 Riverside Drive, 6th floor, Off Riverside
              Drive
            </p>
          </div>
          <div className="col-md-4 location">
            <h4>VISIT US IN GHANA</h4>
            <p className="sub-heading">Accra, Ghana</p>
            <p>One Airport Square, Airport City 8th Floor</p>
          </div>
          <div className="col-md-4 location">
            <h4>VISIT US IN NIGERIA</h4>
            <p className="sub-heading">Lagos, Nigeria</p>
            <p>Sterling Bank Building</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
