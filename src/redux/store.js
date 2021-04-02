import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, persistState } from './persistHandler';
import rootReducer from './reducer';


const persistedState = loadState();
const composedEnhancer = composeWithDevTools(
    applyMiddleware()
)
const store = createStore(rootReducer, persistedState, composedEnhancer)

// Save redux state on every update
store.subscribe(() => {
    persistState(store.getState())
})

export default store
