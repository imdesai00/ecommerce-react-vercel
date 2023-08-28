import React from 'react'

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-newsletter">
          <div className="footer-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="index.html" className="logo d-flex align-items-center">
                    <span>Nooral</span>
                  </a>
                  <p>Nooral have a various range of Products. it Conatains Electronics,Food& Bulding Matirials.</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>

                <div className="col-lg-2 col-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="/About">About us</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="/Product">Products</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="/Contact">Contact Us</a></li>
                  </ul>
                </div>

                <div className="col-lg-2 col-6 footer-links">
                  <h4>Our Products</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Food</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Bulding Matirial</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#">Electronic</a></li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br></br>
                    New York, NY 535022<br></br>
                    United States <br></br><br></br>
                    <strong>Phone:</strong> +1 5589 55488 55<br></br>
                    <strong>Email:</strong> info@example.com<br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    )
}

                  export default Footer