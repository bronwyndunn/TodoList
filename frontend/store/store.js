import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => {
  const store = createStore(rootReducer);
  window.store = store;
};

export default configureStore;
