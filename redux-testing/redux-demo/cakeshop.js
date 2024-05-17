// three core concepts in redux
// 1. store - holds the state of the application

// 2. action - describes what happened
// what are actions?
// only way to interact with store,carry some info to store
// objects with atype property(which describes something that happened in the application)

// 3. reducer - specify how the application's state changes in response to actions sent to the store
//  ties the store and actions together
// holds application  state,allows access to state via getState(), update using dispatch(action)
// register via subscribe(listener) , unregistering using the function returned by the subscribe(listener)
// reducer boiler plate
// Reducer - (prviousState,action)=>newState

// give an cake shop analogy for redux
// store = the cake shop
// action = the customer order
// reducer = the chef who makes the cake based on the order

// 3 principles of redux
// 1. single source of truth - the store is the single source of truth
// 2. state is read-only - the state is read-only, it can only be changed by actions
// 3. changes are made with pure functions - changes are made with pure functions, which means that the output of the function depends only on the
// input and not on any other factors

// Analogy of the principle through the cake shop
// 1. single source of truth - the cake shop is the single source of truth, all the cakes are stored in the cake shop
// 2. state is read-only - the cakes are read-only, they can only be changed by the chef
// 3. changes are made with pure functions - the changes are made with pure functions, ie reducer which is chef who is taking actions

// eg
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CAKE_ORDERED":
//       return {
//         numOfCakes: state.numOfCakes - 1,
//       };
//   }
// };
