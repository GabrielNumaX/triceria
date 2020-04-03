import React, { Component } from 'react';

import { connect } from 'react-redux';

import css from './Order.module.css';

import Header from '../../Component/Header/Header';
import Main from '../../Component/Main/Main';
import Footer from '../../Component/Footer/Footer';

class Order extends Component{

    constructor(props){
        super(props);

        this.state = {
            ordered: false,
            message: 'Your Bill',
        }
    }

    componentDidMount() {

        if(localStorage.getItem('foodAppOrder') !== null){

            this.props.emptyOrder();
            
            this.props.cloneLocal(JSON.parse(localStorage.getItem('foodAppOrder')));
            
        }

        if(localStorage.getItem('foodAppCart') !== null){

            this.props.emptyCart();

            this.props.addCart(JSON.parse(localStorage.getItem('foodAppCart')));
        }
    }

    getTotal = (arr) => {

        let total = 0;

        arr.map(item => {

            return total += item.qty * item.price;
        })

        return total;
    }

    confirmOrder = () => {

        localStorage.removeItem('foodAppOrder');
        localStorage.removeItem('foodAppCart');

        this.props.emptyOrder();
        this.props.emptyCart();

        this.setState({
            ordered: true,
            message: 'Thanks for Buying',
            });

        setTimeout( () => {
            this.props.history.push('/');
        }, 3000)
    }

    render() {

        const total = this.getTotal(this.props.reduxOrderTotal);

        const tBody = this.props.reduxOrderTotal.map((item, pos) => {

            return(
                <tr key={pos}>
                    <td colSpan='5' style={{textAlign: 'left', paddingLeft: '20px'}}>
                        {item.size} {item.name}
                    </td>
                    <td colSpan='1'>
                        {item.qty}
                    </td>
                    <td colSpan='1'>
                        {item.price}
                    </td>
                    <td colSpan='2'>
                        {item.price * item.qty}
                    </td>
                </tr>
            )
        });

        return(
            <div className={css.DivOrderContainer}>
                <Header></Header>   

                <Main></Main>

                <div className={css.DivOrder}>

                    <h2>{this.state.message}</h2>

                    {this.state.ordered ? 

                        <h3>Your Order is been processed</h3>

                        :

                        <div className={css.Bill}>

                            

                                <table className={css.Table}>
                                    <thead>
                                        <tr>
                                            <th colSpan='5'>
                                                description
                                            </th>

                                            <th colSpan='1'>
                                                qty
                                            </th>
                                            <th colSpan='1'>
                                                price
                                            </th>
                                            <th colSpan='2'>
                                                subtotal
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {tBody}

                                    </tbody>

                                    <tfoot>
                                    <tr>
                                        <td colSpan="7" 
                                            style={{textAlign: 'right', paddingRight: '20px'}}
                                            className={css.Total}>
                                            Total:
                                        </td>
                                        <td>
                                            {total}
                                        </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div className={css.BuyNow}>

                                    <button onClick={this.confirmOrder}>Pay Now</button>

                                </div>

                        </div>

                    }
                              
                </div>  

                <Footer></Footer>
            </div>
        )
    }
}
// this reads from STORE
const mapGlobalStateToProps = (globalState) => {
    return {
        reduxOrderTotal: globalState.orderTotal,
        reduxCart: globalState.cart,
    }
}

// this writes to STORE
const mapDispatchToProps = (dispatch) => {
    return {
	//NOMBRE PROP - NOM PARAM
        addOrder: (orderObj) => {
            dispatch({type: 'ORDER_TOTAL', obj: orderObj})
        },
         addCart: (order) => {
            dispatch({type: 'ADD_TO_CART', qty: order})
        },
        cloneLocal: (local) => {
            dispatch({type: 'CLONE_LOCAL', local: local})
        },
        emptyOrder: () => {
            dispatch({type: 'EMPTY_ORDER'})
        },
        emptyCart: () => {
            dispatch({type: 'EMPTY_CART'})
        }
    }
}
export default connect(mapGlobalStateToProps, mapDispatchToProps)(Order);