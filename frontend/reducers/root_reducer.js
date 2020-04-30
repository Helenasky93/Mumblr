import {combineReducers} from 'redux';
import entities from './entities_reducer';
import sessionReducer from './session_reducer';
import errors from './errors_reducer';


const rootReducer = combineReducers({
    entities: entities,
    session: sessionReducer,
    errors: errors
});

export default rootReducer;