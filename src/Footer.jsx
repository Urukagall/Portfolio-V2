import './App.css'
import React from "react";

function Footer() {
  return (
    <footer className="footer-custom bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">Contact</h5>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-2">
            <i className="bi bi-envelope"></i> Email: <a href="mailto:dany.jorge@free.fr" className="footer-link">dany.jorge@free.fr</a>
          </div>
          <div className="col-md-4 mb-2">
            <i className="bi bi-telephone"></i> Phone: <a href="tel:+33651715734" className="footer-link">+33 6 51 71 57 34</a>
          </div>
          <div className="col-md-4 mb-2">
            <i className="bi bi-linkedin"></i><a href="https://linktr.ee/dany.jorge" className="footer-link" target="_blank" rel="noopener noreferrer">Linktree</a>
          </div>
        </div>
        <div className="mt-3">
          &copy; {new Date().getFullYear()} Dany JORGE AFONSO. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
