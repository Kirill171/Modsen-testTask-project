import React, { createContext} from 'react'
import PropTypes from 'prop-types';

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const isHomePage = (location.pathname === '/' || location.pathname === '/Modsen-testTask-project/');
  const isBookInfoPage = (location.pathname === '/book-info/' || location.pathname === '/Modsen-testTask-project/book-info/');

  return (
    <HomePageContext.Provider value={{ isHomePage, isBookInfoPage }}>
      {children}
    </HomePageContext.Provider>
  )
}

HomePageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageContext;