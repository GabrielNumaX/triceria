import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import css from './Header.module.css';

const Header = (props) => {

    const cart = useSelector(redux => redux.cart);

    return(
        <header className={css.Header}>

            <div className={css.DivHeader}>

                <h2>Welcome To FoodApp</h2>
            </div>


            <nav className={css.NavHeader}>
               
                <Link to="/" className={css.LinkHeader}>
                    Home
                </Link>
                    
               <Link to="/order" className={css.LinkHeader}>
                    Your Order
               </Link>

               <div className={css.Cart}>
                   <FontAwesomeIcon icon={faShoppingCart} className={css.I}>

                   </FontAwesomeIcon>

                   <div className={css.CartShop}>
                        {cart}
                   </div>

               </div>

            </nav>

        </header>
    )
}

export default Header;