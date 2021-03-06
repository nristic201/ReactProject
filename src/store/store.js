import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {watcherUserLogin, watcherGymFetch, watcherAttachToCalendar, watcherRemoveFromCalendar, watcherAddToFavorites, watcherRemoveFromFavorites} from '../saga/index'
import rootreducer from '../reducers/root.reducer';



const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watcherUserLogin)
sagaMiddleware.run(watcherGymFetch)
sagaMiddleware.run(watcherAttachToCalendar)
sagaMiddleware.run(watcherRemoveFromCalendar)
sagaMiddleware.run(watcherAddToFavorites)
sagaMiddleware.run(watcherRemoveFromFavorites)
export default store