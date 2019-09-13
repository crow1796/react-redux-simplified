# Redux. Simplified.

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
1. To create modules you must first create its constant action types inside the `reducers/actions/types/` directory.
```js
export const GREET = 'GREET'
```
2. Then create the actions in `reducers/actions/` directory.
```js
import * as Types from './types/hello'

export greet = (name) => {
    return {
        type: Types.GREET,
        payload: name
    }
}
```
3. Now it's time to create the reducer.
```js
import * as Types from './actions/types/hello'
const initialState = {
    message: null
}

const reducers = {
    [Types.GREET]: (state = initialState, payload) => ({...state, message: 'Hello, ' + payload})
}

export default (state = initialState, action) => reducers[action.type] ? reducers[action.type](action.payload) : state
```

Just easy as that, no more switch statements.

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

// This helper will look for the method inside the 'store/reducers/actions/' directory.
const mapDispatchToProps = dispatchToPropsMapper({
    greet: 'hello/greet'
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

Notice that we don't have to import anymore all of the actions that we are to using inside this container.Instead we only import the new helpers `dispatchToPropsMapper` and `stateToPropsMapper` and it doesn't matter if the action has arguments because all of the passed arguments will be injected immediately if there are any.