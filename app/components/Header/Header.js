import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="logo">BandFinder</div>
        <ul className="nav">
          <li className="nav__item">
            <Link to={'/explore'}>
              Explore
            </Link>
          </li>
          <li className="nav__item">
            <Link to={'/post'}>
              Post
            </Link>
          </li>
          <li className="nav__item">
            <Link to={'/login'}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
