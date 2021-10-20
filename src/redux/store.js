import {createStore,applyMiddleware,combineReducers} from 'redux'


import count from './reducers/count'
import user from './reducers/user'
// 中间件 使用下插件才能异步操作数据
import thunk from 'redux-thunk'
const allReducer  = combineReducers({
    count,user
})
export default createStore(allReducer,applyMiddleware(thunk))
