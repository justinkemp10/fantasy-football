import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <footer class="footer-body py-3">
        <div class="container">
          <p class="m-0 text-center text-white">
          <img class="logo-img" src="../graphic-logo.png" alt="graphic-logo" height={30} />
            Copyright &copy; Guy on Guy Fantasy 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;