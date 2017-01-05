# ThunkForm
Demo for multiple asynchronous http requests via ``Redux Thunk`` middleware.

## Why Thunk?
Dispatching multiple actions of async requests makes your component re-render multiple times (cuz' once component's props update, it renders). Use ``Redux Thunk`` and ``middleware`` to make multiple requests at a time and wait until data resolved.

## What Will Thunk Look Like  


### What ThunkForm differs
Please checkout the branch: [feat/thunk-form](https://github.com/xJkit/ThunkForm/tree/feat/thunk-form) to see the thunk functions for action creators.

## Reference
* [Can I dispatch multiple actions from Redux action creators? @James Nelson](http://jamesknelson.com/can-i-dispatch-multiple-actions-from-redux-action-creators/)
* [whats the redux idiom for waiting for multiple async calls? @redux issues](https://github.com/reactjs/redux/issues/723)
