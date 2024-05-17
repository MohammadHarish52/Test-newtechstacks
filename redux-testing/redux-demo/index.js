const redux = require("redux");

const createStore = redux.createStore;
const bindActioncreator = redux.bindActionCreators;
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";

const ICE_ORDERED = "ICE_ORDERED";
const ICE_RESTOCK = "ICE_RESTOCK";

function orderCake() {
  return {
    // fixed return statement
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restock(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICE_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICE_RESTOCK,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  numOficeCream: 20,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    case ICE_ORDERED:
      return {
        ...state,
        numOficeCream: state.numOficeCream - 1,
      };
    case ICE_RESTOCK:
      return {
        ...state,
        numOficeCream: state.numOficeCream + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(restock(9));

const action = bindActioncreator(
  {
    orderCake,
    restock,
    orderIceCream,
    restockIceCream,
  },
  store.dispatch
);

action.orderCake();
action.restock(2);
action.orderIceCream();
action.orderIceCream();
action.restockIceCream(3);

unsubscribe();
