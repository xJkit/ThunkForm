# Boilerplate React App
This is the vanilla version of the react boilerplate without __Foundation__ CSS frameworks and __jQuery__ installed.
If you want to include foundation framework, check out this [branch](https://github.com/xJkit/react-boilerplate/tree/feat/foundation) instead.

### Unit Testing
1. [Karma](https://github.com/karma-runner/karma): A simple tool that allows you to execute JavaScript code in multiple real browsers.
> The main purpose of Karma is to make your test-driven development easy, fast, and fun.
2. [Mocha](https://github.com/mochajs/mocha): Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser.
> For more information view the [documentation](http://mochajs.org/)
3. [expect](https://github.com/mjackson/expect): Write better assertions
> a more compact alternative to [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/)
4. [Enzyme](https://github.com/airbnb/enzyme): JavaScript Testing utilities for React
> Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

### Installation

```
$ yarn
```

You need to know that I use the React version up to v15 because of the __enzyme__ library. Though __enzyme__ is suitable for v0.13, v0.14 and v15; however, the configurations for v15 is the easiest way to kick off.

### Development
Use __webpack__ to bundle all your components and static files by

```
$ yarn watch
```

### TDD/BDD development
You could run __Karma__ test runner for watching your files by

```
$ yarn test
```

If you don't want to be in watch mode, just modify the __singleRun__ from _false_ to _true_ in the __Karma.conf.js__ file.

### Start Server

Of course, you can start your server by running the express server:

```
$ yarn start
```

This command could also be suitable for __Heroku__ deployment environment. If you have questions or suggestions, please feel free to contact me via email: ``xjkit54780@gmail.com``.

### License
MIT
