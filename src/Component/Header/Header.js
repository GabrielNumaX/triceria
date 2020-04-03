import React from 'react';

import { Link } from 'react-router-dom';

import css from './Header.module.css';

const Header = (props) => {



    return(
        <header className={css.Header}>

            <div className={css.DivHeader}>

                <h2>Welcome To GetFood</h2>
            </div>


            <nav className={css.NavHeader}>
               
                {/* <Link className={css.LinkHeader}>
                    Home
                </Link>
                    
               <Link className={css.LinkHeader}>
                    Order Now
               </Link> */}

            </nav>

        </header>
    )
}

export default Header;