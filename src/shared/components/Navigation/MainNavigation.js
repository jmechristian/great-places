import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/Backdrop';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
      <SideDrawer
        show={drawerIsOpen}
        onClick={closeDrawerHandler}
        className='main-navigation__drawer-nav'
      >
        <NavLinks />
      </SideDrawer>
      <MainHeader>
        <button
          className='main-navigation__menu-btn'
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>Great Places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
