import {INCREMENT,DECREMENT} from '../constant'
function count(preState,action){
    const {type,data}=action
    switch (type) {
        case INCREMENT:
        return preState+data*1
        case DECREMENT:
        return preState-data*1
        default:
           return 0
    }
}
export default count