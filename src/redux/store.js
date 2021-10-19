import {createStore,applyMiddleware,combineReducers} from 'redux'
// 中间件 使用下插件才能异步操作数据

import count from './reducers/count'
import userInfo from './reducers/userInfo'
import thunk from 'redux-thunk'
const allReducer  = combineReducers({
    count,userInfo
})
export default createStore(allReducer,applyMiddleware(thunk))
