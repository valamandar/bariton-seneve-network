import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {
  // Search Form
  state = {
    searchForm: false,
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/images/white-logo.png"
                      className="main-logo"
                      alt="logo"
                    />

                    {/* Logo on scroll */}
                    <img
                      src="/images/black-logo.png"
                      className="optional-logo"
                      alt="logo"
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Accueil</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/a-propos" activeClassName="active">
                        <a className="nav-link">A propos</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/formations" activeClassName="active">
                        <a className="nav-link">Formations</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/actualites" activeClassName="active">
                        <a className="nav-link">Actualités</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/galerie" activeClassName="active">
                        <a className="nav-link">Galerie</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
