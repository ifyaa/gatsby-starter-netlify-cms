import React from 'react'
import { Link } from 'gatsby'
import Tawk from '../../static/img/tawk.svg'
import logo from '../img/logo.svg'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="ifyaa" style={{ width: '88px' }} />
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              // onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                우리는
              </Link>
              <Link className="navbar-item" to="/products">
                라이센스 
              </Link>
              <Link className="navbar-item" to="/blog">
                왕홍
              </Link>
              <Link className="navbar-item" to="/contact">
                협력업체
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                커무니티
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://1004if.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
              >noyes
              </a>
        
              <a 
                className="navbar-item"
                href="https://tawk.to/chat/5e65e0e9c32b5c19173a4db1/1e2vnlqkc" 
                target="_blank"
                rel="noopener noreferrer"
              >채팅--
                <span className="icon">
                  <img src={Tawk} alt="Tawk" />
                </span>
              </a>
            </div>
          </div>
          </div>
      </nav>
    )
  }
}

export default Navbar
