import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="">
          <Image src="/images/logo.png" className='logo-img' alt=""  height={30} width={130} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/homePage">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/featuresPage">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricingPage">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactPage">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link login-btn" href="/loginPage">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link signup-btn" href="/signupPage">Signup</a>
            </li> 
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
