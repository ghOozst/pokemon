import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
        <div className="font-bold py-3">Menu</div>

        <ul>
          <li>
            <Link
              to="/"
              className="text-blue-500 py-3 border-t border-b block"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-blue-500 py-3 border-b block"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    );

    menuMask = (
      <div
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={toggleMenu}
      ></div>
    );
  }
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
        {menuMask}
        {menu}
      </span>
    </nav>
  );
};

export default Navigation;
