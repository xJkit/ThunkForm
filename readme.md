# ThunkForm
Demo for multiple asynchronous http requests via ``Redux Thunk`` middleware.

## Why Thunk?
Dispatching multiple actions of async requests make your component re-render multiple times (cuz' once component's props update, it renders). Use ``Redux Thunk`` and ``middleware`` to make multiple requests at a time and wait until data resolved.

## Basic Async Actions in Middleware
Wrap any asyc actions with ``CALL_API``, then unwrap them in the middleware.

There are 3 types of async requests:
  * REQUEST
  * SUCCESS
  * FAILURE

Middleware will check all the action objects passing through and keep those with ``CALL_API`` key. Afterward, middleware will do the following steps:
  1. dispatch a ``request`` action (without ``CALL_API`` key).
  2. fire up a http request and wait using ``Promise``, or so called ``fetch api``.
  3. if data come back successfully:
    * dispatch a ``success`` action (without ``CALL_API`` key).
    * the action will back again; however, this kind of action will bypass the middleware because they don't have the ``CALL_API`` key.
  4. if data don't get back:
    * dispatch a ``failure`` action (without ``CALL_API`` key).

The middleware will return an object like this:
```javascript
  export default store => next => action {
    //async process...
  }
```
where actions are dispatched by ``store.dispatch({...})`` and skipped by ``next(action)``.
