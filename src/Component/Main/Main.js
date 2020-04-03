import React from 'react';

import css from './Main.module.css';

const Main = (props) => {


    return(
        <main className={css.Main}>

            <h1 className={css.MainH1}>
                FoodApp
            </h1>
            <div className={css.DivSlogan}>
                Where you can get Food Fast
            </div>
        </main>
    )
}

export default Main;
