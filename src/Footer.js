import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h2>
        Questions? call <span className="call-span">000-800-919-1694</span>
      </h2>
      <div className="row">
        <div className="col">
          <a href="" />
          <a href="" />
          <a href="" />
          <a href="" />
        </div>
        <div className="col">
          <a href="">FAQ</a>
          <a href="">Investor Relations</a>
          <a href="">Privacy</a>
          <a href="">Speed Test</a>
        </div>
        <div className="col">
          <a href="">Help Center</a>
          <a href="">Jobs</a>
          <a href="">Cookie Preferences</a>
          <a href="">Legal Notices</a>
        </div>
        <div className="col">
          <a href="">Account</a>
          <a href="">Ways to Watch</a>
          <a href="">Corporate Information</a>
          <a href="">Only on Netflix</a>
        </div>
        <div className="col">
          <a href="">Media Centre</a>
          <a href="">Terms of Use</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <select>
        <option value="English">English</option>
        <option value="Malayalam">Malayalam</option>
      </select>
      <p>Netflix India</p>
    </div>
  );
}

export default Footer;
