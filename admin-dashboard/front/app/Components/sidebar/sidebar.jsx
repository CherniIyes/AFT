'use client'

import Link from 'next/link';
import { useState } from 'react';
import "./sidebar.css"





const Sidebar = () => {
      const [activeLink, setActiveLink] = useState(null);

      const handleClick = (link) => {
            setActiveLink(link);
      };
      return (
            <div className="sideBarCon">
                  {/* <Link href="/dash">
                        <div className={`sideBar_link ${activeLink === '/dash' ? 'active' : ''}`} onClick={() => handleClick('/dash')}>
                              <p className='sideBar_link_text'>Dash</p>
                        </div>
                  </Link> */}

                  <Link href="/dash/Screens/users">
                        <div className={`sideBar_link ${activeLink === '/dash/Screens/users' ? 'active' : ''}`} onClick={() => handleClick('/dash/Screens/users')}>
                              <p className='sideBar_link_text'>Users</p>
                        </div>
                  </Link>


                  <Link href="/dash/Screens/articles">
                        <div className={`sideBar_link ${activeLink === '/dash/Screens/articles' ? 'active' : ''}`} onClick={() => handleClick('/dash/Screens/articles')}>
                              <p className='sideBar_link_text'>Articles</p>
                        </div>
                  </Link>
            </div>
      );
}

export default Sidebar