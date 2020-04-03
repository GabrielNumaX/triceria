

const initialState = {
        orderTotal: [],
        cart: 0,
  }

  const MainReducer = (previousState = initialState, action) => {
    
    if(action.type === 'ORDER_TOTAL'){

      previousState.orderTotal.push(action.obj);
      return{...previousState};
    }

    else if(action.type === 'CLONE_LOCAL'){

      previousState.orderTotal = [...action.local]

      return {...previousState}
    }

    else if(action.type === 'UPDATE_ORDER'){

      previousState.orderTotal[action.index] = {...action.obj}

      return {...previousState}
    }

    else if (action.type === 'EMPTY_ORDER'){

      previousState.orderTotal = [];

      return {...previousState}
    }

    else if (action.type === 'ADD_TO_CART'){

        previousState.cart = previousState.cart + action.qty;

        return {...previousState}
    }
    else if (action.type === 'EMPTY_CART'){

      previousState.cart = 0;

      return {...previousState}
  }

    return {...previousState}
  }
  
  export default MainReducer;