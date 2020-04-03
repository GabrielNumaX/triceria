import React, { Component } from 'react';

import { connect } from 'react-redux';

import css from'./Foods.module.css'; 

import { foods } from '../../Utils/JSON/foods';

class Foods extends Component{

    constructor(props){
        super(props);

        this.state = {
            orderFlag: false,
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

    componentDidUpdate(prevProps, prevState) {

        if(prevState.orderFlag !== this.state.orderFlag){

            localStorage.setItem('foodAppCart', JSON.stringify(this.props.reduxCart));

            localStorage.setItem('foodAppOrder', JSON.stringify(this.props.reduxOrderTotal));
        }
    }

    handleSubmit = (e) => {

        e.preventDefault(); 

        const select = e.target.querySelector('select');

        const size = select.value;

        const qty = e.target.querySelector('input[type=number]').value;

        const foodName = e.target.dataset.name;

        const price = e.target.querySelector('option:checked').dataset.price;

        // console.log(price);

        const qtyParse = parseInt(qty)

        const order = {
            name: foodName,
            size: size,
            price: price,
            qty: qtyParse,
        }

        let index = -1;

        if(Array.isArray(this.props.reduxOrderTotal) && this.props.reduxOrderTotal.length){

            this.props.reduxOrderTotal.map((item, pos) => {

                if(item.name === order.name && item.size === order.size){

                    order.qty += item.qty;

                    index = pos;
                }

                return index;
            })

            this.props.updateOrder(index, order);
        }

        if(index < 0 ){

            this.props.addOrder(order);
        }
        
        this.props.addCart(1);

        this.setState((prevState) => ({
            orderFlag: !prevState.orderFlag
        }));
    }

    render() {

        const foodCard = foods.map(item => {
            return(
                <div className={css.Food} key={item.id}>

                        <div className={css.MenuItem}>

                            <div className={css.FoodItem}>
                                <h3>{item.name}</h3>

                                <img className={css.ImgFood}
                                    src={require(`../../Utils/img/${item.img}`)} alt="food"></img>

                            </div>
                    
                            <div className={css.DivUl}>
                                    {item.sizes.map((item, pos) => {
                                        return(
                                            <ul key={pos} className={css.UlSize}>
                                                <li>{item.size}</li>
                                                <li>${item.price}</li>
                                            </ul>
                                        )
                                    })}
                            </div>

                        </div>

                        <div className={css.OrderNow}>
                           
                            <h3>Order Now</h3> 

                            <form data-name={item.name} className={css.FormOrder} 
                                onSubmit={(e) => this.handleSubmit(e)}>

                                <div className={css.DivQty}>

                                    <label>Quantity</label>
                                    <input type="number"
                                            name="quantity" 
                                            pattern="[0-9]*" 
                                            inputMode="numeric"
                                            defaultValue="1"
                                            min="1"
                                            max="50">
                                            
                                    </input>
                                </div>

                                <div className={css.DivSize}>

                                    <label>Size</label>
                                   
                                    <select>
                                        {item.sizes.map((item, pos) =>{
                                            return(
                                                <option data-price={item.price} key={pos}>
                                                    {item.size}
                                                </option>        
                                            )
                                        })}
                                    </select>

                                </div>

                                <input type="submit" value="Order"></input>

                            </form>

                        </div>


                    </div>
            )
        })

        return(

            <div className={css.DivFoods}>

                <section className={css.SectionFoods}>

                    <h2>Our Menu</h2>

                    {foodCard}

                </section>


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
       updateOrder: (indexFound, objUpdate) => {
            dispatch({type: 'UPDATE_ORDER', index: indexFound, obj: objUpdate})
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
export default connect(mapGlobalStateToProps, mapDispatchToProps)(Foods);