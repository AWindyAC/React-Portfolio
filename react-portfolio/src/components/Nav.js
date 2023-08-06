import React, { useState } from "react";
import {HiOutlineMail} from 'react-icons/hi';

function Nav(props){
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props; //Variable I want to store the outcome of what link was clicked
      
    const [navClass, setClass] = useState(''); //Or I could use State

    //const handleClick = () => {};

    /*This is a functional component that renders out my navigation bar. It has links for Home,
    About Me and Contact me with an onClick event listener attached so when you click on one it changes
    which section gets displayed in your browser.*/
    return (    
        <nav>
          <ul className="flex-row">
            {pages.map((Page) => (
              <li
                className={`mx-5 ${
                  currentPage.name === Page.name && 'navActive'
                  }`}
                key={Page.name}
              >
                <span
                  onClick={() => setCurrentPage(Page)}
                >
                </span>
              </li>
            ))}
          </ul>
        </nav>
    );
  }
export default Nav;