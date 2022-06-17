import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="/">
                    <img src="/images/white-logo.png" alt="image" />
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a
                      href="https://web.facebook.com/Sénevé-Network-Asbl-571260633221719"
                      target="_blank"
                    >
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Pages</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/a-propos">
                      <a>A propos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/formations">
                      <a>Formations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/actualites">
                      <a>Actualités</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/galerie">
                      <a>Galerie</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Addresse :</span>
                    2750 Quadra Street <br /> Victoria, Canada
                  </li>
                  <li>
                    <span>Email :</span>
                    bariton@gmail.com
                  </li>
                  <li>
                    <span>Téléphone :</span>
                    +44 587 154756
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                <p>
                  Copyright &copy;{currentYear} Seneve Network. All Rights
                  Reserved{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
