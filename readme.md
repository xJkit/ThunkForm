# ThunkForm
Demo for multiple asynchronous http requests via ``Redux Thunk`` middleware.

## Why Thunk?
Dispatching multiple actions of async requests make your component re-render multiple times (cuz' once component's props update, it renders). Use ``Redux Thunk`` and ``middleware`` to make multiple requests at a time and wait until data resolved.
