import React from 'react';

import Header from '../../Component/Header/Header';
import Main from '../../Component/Main/Main';
import Foods from '../../Component/Foods/Foods';
import Footer from '../../Component/Footer/Footer';

const Home = (props) => {


    return(
        <div>
            <Header></Header>

            <Main></Main>

            <Foods></Foods>

            <Footer></Footer>
        </div>
    )
}

export default Home;