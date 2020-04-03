const initialState = {
    selectedFoods: [
            {
                id: null,
                name: '',
                img: '',
                sizes: [],
                qty: null,
            }
        ],
        orderTotal: [
            {
                id: null,
                name: '',
                img: '',
                sizes: [],
                qty: null,
            }
        ],
        cart: 0,
  }

  const MainReducer = (previousState = initialState, action) => {
    if(action.type === 'ADD_FOOD'){

      previousState.selectedFoods.push(action.obj)
       return {...previousState};
    }

    else if(action.type === 'CART_TOTAL'){

      previousState.shopItems.push(action.shopObj);
      return{...previousState};
    }

    else if (action.type === 'EMPTY_GLOBAL_STATE'){

      previousState.selectedFoods = [];
      previousState.cart = 0;

      return {...previousState}
    }

    else if (action.type === 'FILL_GLOBAL_STATE'){

        previousState.filteredItems = [...action.arr]
    }
    return {...previousState}
  }
  
  export default MainReducer;