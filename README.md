# Reduex

`
Note: This repo uses redux-thunk. So you might as well install redux-thunk in your project or any redux middleware that returns function that dispatches action types in actions.
`

### How to use
1. Clone or Download this repo
2. Copy and Paste the `store/` directory into your project
3. In your main React file, just import the `store`.
```js
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
        ...
    </Provider>
  );
}
```

### Creating Modules
To create modules you only need to create files inside the `store/modules/` directory which will then have a content like this
```js
const state = {
    message: null
}

const actions = {
    greet: {
        // The return value will be passed to the `reducer` as the payload
        handler(params){
            return params
        },
        // The state will be the `state`
        reducer(state, payload){
            return {...state, params}
        }
    }
}

export {
    state,
    actions
}
```
We don't need to create action types anymore.

### Using the modules
To use the modules inside the containers we can now do it like this:
```js
import { dispatchToPropsMapper, stateToPropsMapper } from '<path_to>/store/mappers';
import { connect } from 'react-redux'

class MyComponent extends React.Component {
    async componentDidMount(){
        // We are passing a value here but we don't need to define it in our 'mapDispatchToProps' anymore
        this.props.greet('Joshua')
    }
    
    render(){
        return (
            <div>
            
                { this.props.message }
                ...
            </div>
        )
    }
}

const mapStateToProps = stateToPropsMapper({
    message: 'hello/message'
});

// This helper will look for the method inside the 'store/modules/' directory and inside the actions property.
const mapDispatchToProps = dispatchToPropsMapper({
    greet: 'hello/greet'
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

Notice that we don't have to import the actions that we are to using inside this container anymore.Instead we only import the new helpers `dispatchToPropsMapper` and `stateToPropsMapper`.

And it doesn't matter if the action has arguments because all of the passed arguments when calling the action will be automatically injected to it.

### Example With Redux Thunk, Axios and Redux DevTools
Store: https://github.com/crow1796/ccnquotes/blob/master/src/store/index.js

Module: https://github.com/crow1796/ccnquotes/blob/master/src/store/modules/quotes.js

### LICENSE
MIT
