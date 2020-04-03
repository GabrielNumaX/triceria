import React, { Component } from 'react';

import { connect } from 'react-redux';

import css from'./Foods.module.css'; 

import { foods } from '../../Utils/JSON/foods';

class Foods extends Component{

    constructor(props){
        super(props);
    }

    render() {

        return(

            <div className={css.DivFoods}>

                <section className={css.SectionFoods}>

                    <h2>Our Menu</h2>

                    <div className={css.Food}>

                        <div className={css.MenuItem}>

                            <div className={css.FoodItem}>
                                <h3>Hamburguer</h3>

                                <img className={css.ImgFood}
                                    src={require('../../Utils/img/hamburguer.png')}/>


                            </div>

                            
                            <div className={css.DivUl}>
                                <ul className={css.UlSize}>
                                    <li>Size: regular</li>
                                    <li>Price: $100</li>
                                </ul>
                            </div>

                        </div>

                        <div className={css.OrderNow}>
                           
                            <h3>Order Now</h3> 

                            <form className={css.FormOrder}>

                                <div className={css.DivQty}>

                                    <label>Quantity</label>
                                    <input type="number" 
                                            pattern="[0-9]*" 
                                            inputmode="numeric"
                                            value="1    "
                                            min="1"
                                            max="50"></input>
                                </div>

                                <div className={css.DivSize}>

                                    <label>size</label>
                                    <select>
                                        <option>Regular</option>
                                        <option>Large</option>
                                        <option>Extra -Large</option>
                                    </select>

                                </div>

                                <input type="submit" value="Order"></input>

                            </form>

                        </div>


                    </div>


                </section>


            </div>

        )
    }
}

// this reads from STORE
const mapGlobalStateToProps = (globalState) => {
    return {
        propsFilteredItems: globalState.filteredItems,
    }
}

// this writes to STORE
const mapDispatchToProps = (dispatch) => {
    return {
	//NOMBRE PROP - NOM PARAM
        filterItemAdd: (filterObj) => {
 			//nom ACTION	nom-param reducer
            dispatch({type: 'FILTER_RESULT_ADD', obj: filterObj})        
        },
        filterItemRemove: (filterObj, index) => {
            dispatch({type: 'FILTER_RESULT_REMOVE', obj: filterObj, i: index})
        },
        emptyGlobalState: () => {
            dispatch({type: 'EMPTY_GLOBAL_STATE'})
        },
        fillGlobalState: (prodArr) => {
            dispatch({type: 'FILL_GLOBAL_STATE', arr: prodArr})
        }
    }
}
export default connect(mapGlobalStateToProps, mapDispatchToProps)(Foods);