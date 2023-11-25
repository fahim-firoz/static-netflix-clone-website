import React from "react";

function Header() {
  return (
    <div className="header">
      <nav>
        <img src="./images/logo.png" />
        <div className="nav-last-section">
          <select>
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
          </select>
          <button>Sign In</button>
        </div>
      </nav>
      <div className="header-content">
        <h1>
          The biggest Indian hits. The best Indian <br />
          stories. All streaming here.
        </h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your <br />
          membership.
        </p>
        <form className="email-signup">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Get started &#707;</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
