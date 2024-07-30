///////////////////////Accenture interview questions
// synthetic event(see EventHandler.jsx)
// state
// DOM vs Virtual DOM
// Core of the redux
// mapToDispatchProps and mapToStateProps
// Middleware
// Pure function
// Redux saga  (see ReduxSaga.jsx)

//////////////////// Other useful reactjs questions
// props
// Performance optimization - useMemo(), useCallback(), memo() [see respective files(UseMemo.jsx, UseCallback.jsx)
//                            in hooks folder]
// Custom Hook for toggling and data fetching(see useToggle.jsx, CustomHookFetchData.jsx)
// useReducer, useContext, useEffect()[see respective files UseReducer.jsx, UseContext.jsx, UseEffect.jsx]

/*************STATE************/
//////// MUTABLE:
//         State is local to the component and can be modified. Props are immutable
//////// ENCAPSULATED:
//         State is private and fully controlled by the component. other components cannot
//         directly modify a component’s state.
//////// TRIGGERS RE-RENDERS:
//         When the state of a component changes, React automatically re-renders
//         the component to reflect the new state.
//////// ASYNCHRONOUS UPDATES:
//         State updates in React can be asynchronous. React batches state updates for performance optimization
///////  CONTROLLED COMPONENT:
//         Using state, you can create controlled components where form inputs and other elements are controlled
//         by React, ensuring a single source of truth.

/*************DOM vs Virtual DOM************/
// The Virtual DOM is a lightweight abstraction of the DOM. It is an in-memory representation
//  of the actual DOM elements generated by React components
///////////Diffing:
//          React compares the new virtual DOM tree with the previous one to find the differences.
///////////Reconciliation:
//          The process of updating the real DOM with the changes from the virtual DOM is
//          called reconciliation.
///////////Patching::
//          React updates only the parts of the real DOM that have changed, based on the differences identified
//          in the diffing process.
///////////Batching
//          - Process of combining multiple state updates into a single re-render to optimize performance.
//          - React automatically batches state updates that occur within event handlers to reduce the number
//          of re-renders and improve performance.
//          - If you need to manually batch updates outside of event handlers, you can use
//          ReactDOM.unstable_batchedUpdates(prior to React 18). In React 18 and later,
//          React will handle most cases automatically, but you can still force batching if needed.

/*************CORE OF THE REDUX************/
///////// SINGLE SOURCE OF TRUTH:
//         The entire state of your application is stored in a single JavaScript object called the store.
//         This centralizes the state, making it easier to manage and debug.
///////// STATE IS READ-ONLY:
//         The only way to change the state is to emit an action(dispatch action), an object describing what happened.
//         This ensures that the state is not changed accidentally or unexpectedly, making the state mutations
//         predictable.
///////// CHANGES ARE MADE WITH PURE FUNCTIONS:
//         To specify how the state tree is transformed by actions, you write pure functions called reducers.
//         Reducers take the current state and an action as arguments and return a new state.

/********mapToDispatchProps and mapToStateProps********/
//        Class Components: Use mapStateToProps and mapDispatchToProps with connect.
//        Function Components: Prefer useSelector and useDispatch for a more straightforward and modern approach.

/********MIDDLEWARE IN REACTJS********/
//        Middleware provides a third-party extension point between dispatching an action and the moment
//        it reaches the reducer
/////////Asynchronous Actions:
//        Middleware is often used to handle asynchronous operations, such as fetching data from an API.
//        Libraries like redux-thunk and redux-saga are popular for this purpose.
///////  Logging:
//        Middleware can log actions and state changes, which is useful for debugging and monitoring the application.
///////  Error Reporting:
//        Middleware can catch and report errors that occur during the dispatching of actions.
//////   Routing:
//        Middleware can handle side effects related to routing, such as redirecting users after certain actions.

/********PURE FUNCTIONS********/
//////// Deterministic:
//        Given the same input, a pure function will always return the same output.
//////// No Side Effects:
//        Pure functions do not have side effects. They do not modify any external state (variables, data structures,
//        etc.) or interact with external systems (I/O operations, database calls, etc.).

///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////
/********PROPS********/
//////// Read-Only:
//         The child component can read the props and use them to render its output, but it cannot modify them.
///////  Unidirectional Data Flow:
//         Props flow from parent to child in a one-way direction, enforcing a predictable data flow
//         and making the application easier to understand and debug.
//       Destructuring Props in child component is common.
