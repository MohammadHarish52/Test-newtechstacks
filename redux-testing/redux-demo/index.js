const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return; // creating an action
  {
    type: CAKE_ORDERED;
    quantity: 1;
  }
}

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
