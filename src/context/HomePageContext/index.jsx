import React, {createContext} from 'react'
import PropTypes from 'prop-types';

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const isHomePage = (location.pathname === '/' || location.pathname === '/Modsen-testTask-project/');

  return (
    <HomePageContext.Provider value={{ isHomePage }}>
      {children}
    </HomePageContext.Provider>
  )
}

HomePageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageContext;