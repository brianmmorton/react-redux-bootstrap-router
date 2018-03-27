This is a simple boilerplate that uses react router, redux, and bootstrap on top of create react app. Often I want a boilerplate with something like this, simple and clean, but they include a bunch of other stuff. 

## Install
`
$ git clone https://github.com/brianmmorton/react-redux-bootstrap-router.git
$ cd react-redux-bootstrap-router
$ npm i
`

## Start
`
$ npm start
`

## Test
`
$ npm run test
`

## Bootstrap style overrides
To override styles for bootstrap, use the styles directory. Add a file for the component name and write in the styles in bootstrap format, ie btn, btn-default, btn-lg, etc.

## Adding reducers
The structure of the store for redux is based on redux + redux-thunk, and using promise middleware for async requests and actions. 

Add actions by exporting in the directory named as the reducer. I am not a huge fan of this syntax, and more recently like using redux-saga instead, with this architecture: https://github.com/brianmmorton/react-redux-saga-bootstrap-router

```
// EXAMPLE
export const login = (data: LoginData): Action => {
  return dispatch => {
    return new Promise(function(resolve, reject) {
      request.post('/auth/login')
        .end((err, res) => {
          if (err) {
            return dispatch({ type: LOGIN_ERROR, error: res.text, });;
          }
          dispatch({ type: LOGIN_SUCCESS, user: res.body, });
        });
    });
  }
}
```


## Remove Bootstrap
`
$ npm uninstall --save reactstrap
--> styles/*.css may has bootstrap overrides
-->  Remove all places using reactstrap and replace with whatever
`
